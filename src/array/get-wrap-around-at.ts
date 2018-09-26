import { wrapAround } from "../math/wrap-around";

/**
 * Gets an element in the array wrapping around (both ways), so -1 would be the
 * last element, and length would warp to 0.
 *
 * @param array - The array to use to get items from.
 * @param index - Index to get in this array, if it is out of bounds
 * (index < 0 or index >= this.length), we will "wrap" that index around to be
 * in range.
 * @returns Element at the index, wrapped around when out of range.
 */
export function getWrapAroundAt<T>(array: T[], index: number): T {
    return array[wrapAround(index, array.length)];
}
