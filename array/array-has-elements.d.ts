import { NonEmptyArray } from "../types/non-empty-array";
/**
 * Checks if an array has at least 1 item, and types it as such.
 *
 * @param array - The array to check if it has at least 1 element.
 * @returns True if not empty, otherwise false when empty.
 */
export declare function arrayHasElements<T>(array: ReadonlyArray<T>): array is NonEmptyArray<T>;
