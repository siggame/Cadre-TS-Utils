/**
 * Removes a matching element from the array, if present.
 *
 * @param element - the element to remove from arrays.
 * @param arrays - The array(s) you want to try to the element from.
 * @returns The number of arrays this element was removed from.
 */
export function removeElementFrom<T>(element: T, ...arrays: T[][]): number {
    let removed = 0;
    for (const array of arrays) {
        const index = array.indexOf(element);

        if (index > -1) {
            array.splice(index, 1);
            removed += 1;
        }
    }

    return removed;
}
