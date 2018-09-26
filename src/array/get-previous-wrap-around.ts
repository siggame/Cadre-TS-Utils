import { getWrapAround } from "./get-wrap-around";

/**
 * Convenience function to get the previous element in this array after some
 * element, wrapping around if it would walk off the array.
 *
 * @see getWrapAround
 * @param array - The array to get elements in.
 * @param element - The element in the array to get the previous element before
 * @returns the previous element in the array after the element, or wraps to the
 * beginning if that element is the last element
 */
export function getPreviousWrapAround<T>(array: T[], element: T): T | undefined {
    return getWrapAround(array, element, -1);
}
