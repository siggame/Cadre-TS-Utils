/**
 * Removes a matching element from the array, if present.
 *
 * @param array - The array to attempt to remove an element from.
 * @param elements - The element(s) you want to try to remove from the array.
 * @returns The number of elements removed.
 */
export function removeElements<T>(array: T[], ...elements: T[]): number {
    let removed = 0;
    for (const element of elements) {
        const index = array.indexOf(element);

        if (index > -1) {
            array.splice(index, 1);
            removed += 1;
        }
    }

    return removed;
}
