import { NonEmptyArray } from "../types/non-empty-array";
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
export declare function getNextWrapAround<T, A extends ReadonlyArray<T>>(array: A, element: T): A extends Readonly<NonEmptyArray<T>> ? T : T | undefined;
