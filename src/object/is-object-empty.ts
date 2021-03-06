/**
 * Checks if an object is empty (has no keys).
 *
 * @param obj - The object to check.
 * @returns True if the object is empty, false otherwise.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isObjectEmpty(obj: object): obj is {} {
    return Object.getOwnPropertyNames(obj).length === 0;
}
