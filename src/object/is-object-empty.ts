/**
 * Checks if an object is empty (has no keys).
 *
 * @param obj - The object to check.
 * @returns True if the object is empty, false otherwise.
 */
export function isObjectEmpty(obj: object): boolean {
    return (Object.getOwnPropertyNames(obj).length === 0);
}
