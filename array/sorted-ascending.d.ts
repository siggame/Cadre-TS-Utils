/**
 * Returns a newly sorted array of the passed in array.
 * The passed in array is not changed.
 *
 * @param array - The array to form a sorted one from.
 * @param getVal - An optional callback to get the value from each item to
 * compare against.
 * @returns A new array that is the sorted form of the passed in array.
 */
export declare function sortedAscending<T>(array: ReadonlyArray<T>, getVal?: (element: T) => any): T[];
