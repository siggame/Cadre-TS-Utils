const htmlEntityMap: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
};

const htmlAttributeEntityMap: { [key: string]: string } = {
    "\"": "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
};

/**
 * Escapes a string to be displayed in HTML, but not **as** HTML.
 *
 * @param str - The string to escape.
 * @param escapeAttributes - If characters in attributes should be escapes as
 * well.
 * @returns `str` now escaped.
 */
export function escapeHTML(
    str: string,
    escapeAttributes: boolean = false,
): string {
    const htmlEscaped = String(str).replace(
        /[&<>]/g,
        (s) => htmlEntityMap[s],
    );

    return escapeAttributes
        ? htmlEscaped.replace(
            /["'\/]/g,
            (s) => htmlAttributeEntityMap[s],
        )
        : htmlEscaped;
}
