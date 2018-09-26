/**
 * Checks to ensure that a given array is a subset of another array.
 *
 * @param subarray - The subset to check if is in the array.
 * @param array - The array to check make sure contains the subset.
 * @returns True if the array contains the given subset, false otherwise.
 */
export function isSubArrayOf(
    subarray: ReadonlyArray<unknown>,
    array: ReadonlyArray<unknown>,
): boolean {
    return subarray.every((val) => array.includes(val));
}
