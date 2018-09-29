import { wrapAround } from "../math/wrap-around";
import { ArrayWithOneOrMore } from "./array-with-one-or-more";

/**
 * Gets an element in the array wrapping around (both ways), so -1 would be the
 * last element, and length would warp to 0.
 *
 * @param array - The array to use to get items from.
 * @param index - Index to get in this array, if it is out of bounds
 * (index < 0 or index >= this.length), we will "wrap" that index around to be
 * in range.
 * @returns Element at the index, wrapped around when out of range.
 * If the array is empty undefined is returned.
 */
export function getWrapAroundAt<T, A extends ReadonlyArray<T>>(
    array: A,
    index: number,
): A extends Readonly<ArrayWithOneOrMore<T>>
    ? T
    : T | undefined {
    // tslint:disable-next-line:no-any no-unsafe-any
    return (array[wrapAround(index, array.length)]) as any;
}
