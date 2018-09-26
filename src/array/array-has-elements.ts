import { ArrayWithOneOrMore } from "./array-with-one-or-more";

/**
 * Checks if an array has at least 1 item, and types it as such.
 *
 * @param array - The array to check if it has at least 1 element.
 * @returns True if not empty, otherwise false when empty.
 */
export function arrayHasElements<T>(
    array: ReadonlyArray<T>,
): array is ArrayWithOneOrMore<T> {
    return array.length > 0;
}
