"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_object_1 = require("../object/is-object");
/**
 * Make points from a loose collection of point like objects.
 *
 * @param args - The point like things to create from.
 * @returns An array of points from what we could determine.
 */
function makePoints(...args) {
    const points = [];
    for (let i = 0; i < args.length; i += 1) {
        const arg = args[i];
        if (is_object_1.isObject(arg)) {
            if (Array.isArray(arg)) {
                const x = Number(arg[0]);
                const y = Number(arg[1]);
                points.push({ x, y });
            }
            else {
                if (!arg.x || !arg.y) {
                    throw new Error(`arg ${arg} does not have point like structure!`);
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
exports.makePoints = makePoints;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFrZS1wb2ludHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWF0aC9tYWtlLXBvaW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUErQztBQUcvQzs7Ozs7R0FLRztBQUNILFNBQWdCLFVBQVUsQ0FBQyxHQUFHLElBQW9CO0lBQzlDLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLG9CQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDZixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3BCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDekI7aUJBQ0k7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNsQixNQUFNLElBQUksS0FBSyxDQUNYLE9BQU8sR0FBRyxzQ0FBc0MsQ0FDbkQsQ0FBQztpQkFDTDtnQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNSLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUNuQixDQUFDLENBQUM7YUFDTjtTQUNKO2FBQ0ksSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUNqRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDUixDQUFDLEVBQUUsR0FBRztnQkFDTixDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyQixDQUFDLENBQUM7U0FDTjthQUNJO1lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsR0FBRyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdEU7S0FDSjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFuQ0QsZ0NBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tIFwiLi4vb2JqZWN0L2lzLW9iamVjdFwiO1xuaW1wb3J0IHsgSVBvaW50IH0gZnJvbSBcIi4uL3R5cGVzL3BvaW50XCI7XG5cbi8qKlxuICogTWFrZSBwb2ludHMgZnJvbSBhIGxvb3NlIGNvbGxlY3Rpb24gb2YgcG9pbnQgbGlrZSBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSBhcmdzIC0gVGhlIHBvaW50IGxpa2UgdGhpbmdzIHRvIGNyZWF0ZSBmcm9tLlxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgcG9pbnRzIGZyb20gd2hhdCB3ZSBjb3VsZCBkZXRlcm1pbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUG9pbnRzKC4uLmFyZ3M6IEFycmF5PHVua25vd24+KTogSVBvaW50W10ge1xuICAgIGNvbnN0IHBvaW50czogSVBvaW50W10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgYXJnID0gYXJnc1tpXTtcbiAgICAgICAgaWYgKGlzT2JqZWN0KGFyZykpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gTnVtYmVyKGFyZ1swXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IE51bWJlcihhcmdbMV0pO1xuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghYXJnLnggfHwgIWFyZy55KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBhcmcgJHthcmd9IGRvZXMgbm90IGhhdmUgcG9pbnQgbGlrZSBzdHJ1Y3R1cmUhYCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB4OiBOdW1iZXIoYXJnLngpLFxuICAgICAgICAgICAgICAgICAgICB5OiBOdW1iZXIoYXJnLnkpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGFyZ3NbaSArIDFdID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgICAgeDogYXJnLFxuICAgICAgICAgICAgICAgIHk6IE51bWJlcihhcmdzW2ldKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHBvaW50IHRvIHBhcnNlOiAke2FyZ30gYXQgaW5kZXggJHtpfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvaW50cztcbn1cbiJdfQ==