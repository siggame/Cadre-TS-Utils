import { isObject } from "../object/is-object";
import { IPoint } from "../types/point";

/**
 * Make points from a loose collection of point like objects.
 *
 * @param args - The point like things to create from.
 * @returns An array of points from what we could determine.
 */
export function makePoints(...args: Array<unknown>): IPoint[] {
    const points: IPoint[] = [];
    for (let i = 0; i < args.length; i += 1) {
        const arg = args[i];
        if (isObject(arg)) {
            if (Array.isArray(arg)) {
                const x = Number(arg[0]);
                const y = Number(arg[1]);
                points.push({ x, y });
            }
            else {
                if (!arg.x || !arg.y) {
                    throw new Error(
                        `arg ${arg} does not have point like structure!`,
                    );
                }
                points.push({
                    x: Number(arg.x),
                    y: Number(arg.y),
                });
            }
        }
        else if (typeof arg === "number" && typeof args[i + 1] === "number") {
            i += 1;
            points.push({
                x: arg,
                y: Number(args[i]),
            });
        }
        else {
            throw new Error(`Unexpected point to parse: ${arg} at index ${i}`);
        }
    }

    return points;
}
