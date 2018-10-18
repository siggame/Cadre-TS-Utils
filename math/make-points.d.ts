import { IPoint } from "../types/point";
/**
 * Make points from a loose collection of point like objects.
 *
 * @param args - The point like things to create from.
 * @returns An array of points from what we could determine.
 */
export declare function makePoints(...args: Array<unknown>): IPoint[];
