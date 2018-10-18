/**
 * Creates a 2D array (array of arrays).
 *
 * @param width - The width of the [first] array.
 * @param height - The height of the [second] arrays in the first.
 * @param defaultValue - The default value to fill in each element in all
 * arrays with.
 * @returns A 2D array, all fill in with the default value.
 */
export declare function make2D<T>(width: number, height: number, defaultValue: T): T[][];
/**
 * Creates a 2D array (array of arrays).
 *
 * @param width - The width of the [first] array.
 * @param height - The height of the [second] arrays in the first.
 * @returns A 2D array, all fill in with undefined.
 */
export declare function make2D<T>(width: number, height: number): Array<Array<T | undefined>>;
