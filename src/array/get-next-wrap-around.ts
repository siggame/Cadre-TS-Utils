import { NonEmptyArray } from "../types/non-empty-array";
import { getWrapAround } from "./get-wrap-around";

/**
 * Convenience function to get the next element in this array after some element
 * Wrapping around if it would walk off the array.
 *
 * @see getWrapAround
 * @param array - The array to get elements in.
 * @param element - The element in the array to get the next element after
 * @returns the next element in the array after the element, or wraps to the
 * beginning if that element is the last element.
 */
export function getNextWrapAround<T, A extends ReadonlyArray<T>>(
    array: A,
    element: T,
): A extends Readonly<NonEmptyArray<T>>
    ? T
    : T | undefined {
    // tslint:disable-next-line:no-any no-unsafe-any
    return getWrapAround(array, element, 1) as any;
}
