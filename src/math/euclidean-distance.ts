import { Point } from "../types/point";
import { makePoints } from "./make-points";

/**
 * Gets the Euclidean distance between two points (x1, y1) and (x2, y2).
 * Pythagorean theorem: The distance between two points is the length of the
 * path connecting them.
 *
 * @param point1 - { x, y } Point 1.
 * @param point2 - { x, y } Point 2.
 * @returns The euclidean distance between the two points.
 */
export function euclideanDistance(point1: Point, point2: Point): number;

/**
 * Gets the Euclidean distance between two points (x1, y1) and (x2, y2).
 * Pythagorean theorem: The distance between two points is the length of the
 * path connecting them.
 *
 * @param point1 - [ x, y ] point 1.
 * @param point2 - [ x, y ] point 2.
 * @returns The euclidean distance between the two points.
 */
export function euclideanDistance(
    point1: [number, number],
    point2: [number, number],
): number;

/**
 * Gets the Euclidean distance between two points (x1, y1) and (x2, y2).
 * Pythagorean theorem: The distance between two points is the length of the
 * path connecting them.
 *
 * @param x1 - Point 1's x.
 * @param y1 - Point 1's y.
 * @param x2 - Point 2's x.
 * @param y2 - Point 2's y.
 * @returns The euclidean distance between the two points.
 */
export function euclideanDistance(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
): number;

/**
 * Gets the Euclidean distance between two points (x1, y1) and (x2, y2).
 * Pythagorean theorem: The distance between two points is the length of the
 * path connecting them.
 *
 * @param args - Points either in the format [x1, y1, x2, y2],
 * [{x1, y1}, {x1, y2}], or [ [x1, y1], [x1, y2] ].
 * @returns The euclidean distance between the two points.
 */
export function euclideanDistance(...args: Array<unknown>): number {
    const points = makePoints(...args);

    return Math.sqrt(
        (points[1].x - points[0].x) ** 2 + (points[1].y - points[0].y) ** 2,
    );
}
