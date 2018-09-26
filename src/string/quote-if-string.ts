/**
 * Wraps a value in quotes if it is a string.
 *
 * @param arg - The arg to check if it should be quoted.
 * @returns The toString version of arg, wrapped in quotes if it was originally
 * a string.
 */
export function quoteIfString(arg: unknown): string {
    return typeof arg === "string"
        ? `"${arg}"`
        : String(arg);
}
