/**
 * Filters an array **IN PLACE**, as opposed to returning a new array.
 *
 * @param array - The array to filter, it will be mutated.
 * @param filter - The filter function, return true on elements to keep.
 */
export function filterInPlace<T>(array: T[], filter: (element: T) => boolean): void {
    const filtered = array.filter(filter);
    array.length = filtered.length;
    for (let i = 0; i < filtered.length; i++) {
        array[i] = filtered[i];
    }
}
