/**
 * Puts escape characters in front of any non escaped characters.
 *
 * @param str - The string to escape.
 * @returns str now escaped.
 */
export function escapeRegExp(str: string): string {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
