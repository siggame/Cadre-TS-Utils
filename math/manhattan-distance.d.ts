import { IPoint } from "../types/point";
/**
 * Gets the Manhattan distance between two points (x1, y1) and (x2, y2);
 * the distance between two points measured along axes at right angles.
 *
 * @param point1 - { x, y } point 1
 * @param point2 - { x, y } point 2
 * @returns The manhattan distance between the two points.
 */
export declare function manhattanDistance(point1: IPoint, point2: IPoint): number;
/**
 * Gets the Manhattan distance between two points (x1, y1) and (x2, y2);
 * the distance between two points measured along axes at right angles.
 *
 * @param point1 - [ x, y ] point 1
 * @param point2 - [ x, y ] point 2
 * @returns The manhattan distance between the two points.
 */
export declare function manhattanDistance(point1: [number, number], point2: [number, number]): number;
/**
 * Gets the Manhattan distance between two points (x1, y1) and (x2, y2);
 * the distance between two points measured along axes at right angles.
 *
 * @param x1 - point 1's x
 * @param y1 - point 1's y
 * @param x2 - point 2's x
 * @param y2 - point 2's y
 * @returns The manhattan distance between the two points.
 */
export declare function manhattanDistance(x1: number, y1: number, x2: number, y2: number): number;
