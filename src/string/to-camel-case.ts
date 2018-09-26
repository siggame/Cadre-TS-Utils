/**
 * Converts a string in normal case (spaces) to camelCase.
 *
 * @param str - The string to convert to camel case.
 * @returns str now in camel case format.
 * @example 'this neat variable' -> 'thisNeatVariable'
 */
export function toCamelCase(str: string): string {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (matched, index) => {
        if (Number(matched) === 0) {
            return ""; // or if (/\s+/.test(match)) for white spaces
        }

        return index === 0 ? matched.toLowerCase() : matched.toUpperCase();
    });
}
