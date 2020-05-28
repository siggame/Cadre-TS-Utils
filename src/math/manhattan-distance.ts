import { Point } from "../types/point";
import { makePoints } from "./make-points";

/**
 * Gets the Manhattan distance between two points (x1, y1) and (x2, y2);
 * the distance between two points measured along axes at right angles.
 *
 * @param point1 - The { x, y } point 1.
 * @param point2 - The { x, y } point 2.
 * @returns The manhattan distance between the two points.
 */
export function manhattanDistance(point1: Point, point2: Point): number;

/**
 * Gets the Manhattan distance between two points (x1, y1) and (x2, y2);
 * the distance between two points measured along axes at right angles.
 *
 * @param point1 - The [ x, y ] point 1.
 * @param point2 - The [ x, y ] point 2.
 * @returns The manhattan distance between the two points.
 */
export function manhattanDistance(
    point1: [number, number],
    point2: [number, number],
): number;

/**
 * Gets the Manhattan distance between two points (x1, y1) and (x2, y2);
 * the distance between two points measured along axes at right angles.
 *
 * @param x1 - Point 1's x.
 * @param y1 - Point 1's y.
 * @param x2 - Point 2's x.
 * @param y2 - Point 2's y.
 * @returns The manhattan distance between the two points.
 */
export function manhattanDistance(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
): number;

/**
 * Gets the Manhattan distance between two points (x1, y1) and (x2, y2);
 * the distance between two points measured along axes at right angles.
 *
 * @param args - Points either in the format [x1, y1, x2, y2],
 * [{x1, y1}, {x1, y2}], or [ [x1, y1], [x1, y2] ].
 * @returns The manhattan distance between the two points.
 */
export function manhattanDistance(...args: Array<unknown>): number {
    const points = makePoints(...args);

    const dx = Math.abs(points[0].x - points[1].x);
    const dy = Math.abs(points[0].y - points[1].y);

    return dx + dy;
}
