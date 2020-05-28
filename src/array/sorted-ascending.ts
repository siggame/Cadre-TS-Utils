/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// any is allowed for comparison usage (>, <, ===)

/**
 * Returns a newly sorted array of the passed in array.
 * The passed in array is not changed.
 *
 * @param array - The array to form a sorted one from.
 * @param getVal - An optional callback to get the value from each item to
 * compare against.
 * @returns A new array that is the sorted form of the passed in array.
 */
export function sortedAscending<T>(
    array: ReadonlyArray<T>,
    getVal?: (element: T) => any,
): T[] {
    return array.slice().sort((a, b) => {
        let first: any = a;
        let second: any = b;

        if (getVal) {
            first = getVal(first);
            second = getVal(second);
        }

        if (first > second) {
            return 1;
        }

        if (first < second) {
            return -1;
        }

        return 0; // a must be equal to b
    });
}
