/**
 * Checks if an array is empty, and notifies TypeScript that it is if so.
 *
 * @param array - The array to check if is empty.
 * @returns True if empty, false otherwise.
 */
export declare function isEmpty<T>(array: T[]): array is [];
