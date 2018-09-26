/**
 * Checks to make sure at least two arrays all contain the same elements. The
 * order of the elements is immaterial.
 *
 * @param array1 - The first array to check.
 * @param array2 - The second array to check.
 * @param arrays - Any additional arrays to check. Only 2 are required.
 * @returns True if all arrays contain the same elements, false otherwise.
 */
export function includesTheSameElements(
    array1: ReadonlyArray<unknown>,
    array2: ReadonlyArray<unknown>,
    ...arrays: Array<Array<unknown>>
): boolean {
     // for easier usage of all other array.
    arrays.push(array2 as Array<unknown>);

    // First let's make sure they are all the same length.
    // If they are not, they cannot all contain the same elements, so there is
    // no need to iterate through them.
    const expectedLength = array1.length;
    for (const array of arrays) {
        if (array.length !== expectedLength) {
            return false;
        }
    }

    // Convert to Sets for contant lookup times.

    // The first set, to get elements from.
    const set1 = new Set(array1);
    // The rest of the sets, to check to ensure all have the same elements as
    // the above set.
    const sets = [array2, ...arrays].map((a) => new Set(a));

    // If we got here all arrays are the same size. So now we ensure all
    // elements are the same.
    for (const element of set1) {
        for (const set of sets) {
            if (!set.has(element)) {
                return false;
            }
        }
    }

    // If we got here, every set has the same elements, so the arrays contain
    // the same elements (order was ignored).
    return true;
}
