"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Removes a matching element from the array, if present.
 *
 * @param element - The element to remove from arrays.
 * @param arrays - The array(s) you want to try to the element from.
 * @returns The number of arrays this element was removed from.
 */
function removeElementFrom(element, ...arrays) {
    let removed = 0;
    for (const array of arrays) {
        const index = array.indexOf(element);
        if (index > -1) {
            array.splice(index, 1);
            removed += 1;
        }
    }
    return removed;
}
exports.removeElementFrom = removeElementFrom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWVsZW1lbnQtZnJvbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcnJheS9yZW1vdmUtZWxlbWVudC1mcm9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsaUJBQWlCLENBQUksT0FBVSxFQUFFLEdBQUcsTUFBYTtJQUM3RCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7UUFDeEIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNaLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLENBQUM7U0FDaEI7S0FDSjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFaRCw4Q0FZQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVtb3ZlcyBhIG1hdGNoaW5nIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXksIGlmIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byByZW1vdmUgZnJvbSBhcnJheXMuXG4gKiBAcGFyYW0gYXJyYXlzIC0gVGhlIGFycmF5KHMpIHlvdSB3YW50IHRvIHRyeSB0byB0aGUgZWxlbWVudCBmcm9tLlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBhcnJheXMgdGhpcyBlbGVtZW50IHdhcyByZW1vdmVkIGZyb20uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbGVtZW50RnJvbTxUPihlbGVtZW50OiBULCAuLi5hcnJheXM6IFRbXVtdKTogbnVtYmVyIHtcbiAgICBsZXQgcmVtb3ZlZCA9IDA7XG4gICAgZm9yIChjb25zdCBhcnJheSBvZiBhcnJheXMpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgcmVtb3ZlZCArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbW92ZWQ7XG59XG4iXX0=