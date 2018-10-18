import { IPoint } from "../types/point";
/**
 * Gets the Euclidean distance between two points (x1, y1) and (x2, y2);
 * Pythagorean theorem: The distance between two points is the length of the
 * path connecting them.
 *
 * @param point1 - { x, y } point 1
 * @param point2 - { x, y } point 2
 * @returns The euclidean distance between the two points.
 */
export declare function euclideanDistance(point1: IPoint, point2: IPoint): number;
/**
 * Gets the Euclidean distance between two points (x1, y1) and (x2, y2);
 * Pythagorean theorem: The distance between two points is the length of the
 * path connecting them.
 *
 * @param point1 - [ x, y ] point 1
 * @param point2 - [ x, y ] point 2
 * @returns The euclidean distance between the two points.
 */
export declare function euclideanDistance(point1: [number, number], point2: [number, number]): number;
/**
 * Gets the Euclidean distance between two points (x1, y1) and (x2, y2);
 * Pythagorean theorem: The distance between two points is the length of the
 * path connecting them.
 *
 * @param x1 - point 1's x
 * @param y1 - point 1's y
 * @param x2 - point 2's x
 * @param y2 - point 2's y
 * @returns The euclidean distance between the two points.
 */
export declare function euclideanDistance(x1: number, y1: number, x2: number, y2: number): number;
