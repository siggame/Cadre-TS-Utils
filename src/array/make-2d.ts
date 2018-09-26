/**
 * Creates a 2D array (array of arrays).
 *
 * @param width - The width of the [first] array.
 * @param height - The height of the [second] arrays in the first.
 * @param defaultValue - The default value to fill in each element in all
 * arrays with.
 * @returns A 2D array, all fill in with the default value.
 */
export function make2D<T>(
    width: number,
    height: number,
    defaultValue: T,
): T[][];

/**
 * Creates a 2D array (array of arrays).
 *
 * @param width - The width of the [first] array.
 * @param height - The height of the [second] arrays in the first.
 * @returns A 2D array, all fill in with undefined.
 */
export function make2D<T>(
    width: number,
    height: number,
): Array<Array<T | undefined>>;

/**
 * Creates a 2D array (array of arrays).
 *
 * @param width - The width of the [first] array.
 * @param height - The height of the [second] arrays in the first.
 * @param defaultValue - An optional default value to fill in each element
 * in all arrays with.
 * @returns A 2D array, all fill in with the default value if given, otherwise
 * filled in with undefined.
 */
export function make2D<T>(
    width: number,
    height: number,
    defaultValue?: T,
): Array<Array<T | undefined>> {
    const array: Array<Array<T | undefined>> = [];
    for (let x = 0; x < width; x++) {
        const subArray: Array<T | undefined> = [];
        subArray.length = height;
        subArray.fill(defaultValue);

        array.push(subArray);
    }

    return array;
}
