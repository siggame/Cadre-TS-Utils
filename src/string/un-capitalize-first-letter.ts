/**
 * Un-capitalizes the first character in a string, and no others.
 *
 * @param str - The string to un-capitalize.
 * @returns `str` with the first character now lowercase.
 */
export function unCapitalizeFirstLetter(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
