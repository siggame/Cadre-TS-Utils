/**
 * Gets the elements from an array that are not present in another array.
 *
 * @param array - The array to check for items from. The results can only
 * come from this array.
 * @param subarray - The array to check if the items from are in.
 * @returns A new array with a sub set of the array, of elements not found in
 * the subarray.
 */
export function getMinusArray<T>(
    array: ReadonlyArray<T>,
    subarray: ReadonlyArray<unknown>,
): T[] {
    return array.filter((val) => !subarray.includes(val));
}
