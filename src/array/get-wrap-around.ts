import { getWrapAroundAt } from "./get-wrap-around-at";

/**
 * Returns the next element in the array by some offset, wrapping around if
 * it would walk off the array.
 *
 * @param array - The array to get something in wrapping around.
 * @param element - Element in the array to find the index of.
 * @param offset - From the element's position where to move, up or down and
 * will wrap around.
 * @returns Undefined if the element was not in this array, or the
 * element at the offset from the passed in element in the array, wrapping
 * around.
 */
export function getWrapAround<T>(array: T[], element: T, offset?: number): T | undefined {
    const index = array.indexOf(element);
    if (index < 0) {
        return;
    }

    return getWrapAroundAt(array, index + (offset || 0));
}
