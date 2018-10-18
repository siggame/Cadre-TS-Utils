"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Wraps an index around a given range.
 *
 * @param index - The number to wrap within 0 to length, so if this was -1 the
 * result would be length-1.
 * @param length - The right bound to wrap around back to 0 from.
 * @returns The index "wrapped around" 0 to length. 0 <= result < length.
 */
function wrapAround(index, length) {
    return (index % length + length) % length;
}
exports.wrapAround = wrapAround;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcC1hcm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWF0aC93cmFwLWFyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7O0dBT0c7QUFDSCxTQUFnQixVQUFVLENBQUMsS0FBYSxFQUFFLE1BQWM7SUFDcEQsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQzlDLENBQUM7QUFGRCxnQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV3JhcHMgYW4gaW5kZXggYXJvdW5kIGEgZ2l2ZW4gcmFuZ2UuXG4gKlxuICogQHBhcmFtIGluZGV4IC0gVGhlIG51bWJlciB0byB3cmFwIHdpdGhpbiAwIHRvIGxlbmd0aCwgc28gaWYgdGhpcyB3YXMgLTEgdGhlXG4gKiByZXN1bHQgd291bGQgYmUgbGVuZ3RoLTEuXG4gKiBAcGFyYW0gbGVuZ3RoIC0gVGhlIHJpZ2h0IGJvdW5kIHRvIHdyYXAgYXJvdW5kIGJhY2sgdG8gMCBmcm9tLlxuICogQHJldHVybnMgVGhlIGluZGV4IFwid3JhcHBlZCBhcm91bmRcIiAwIHRvIGxlbmd0aC4gMCA8PSByZXN1bHQgPCBsZW5ndGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwQXJvdW5kKGluZGV4OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKGluZGV4ICUgbGVuZ3RoICsgbGVuZ3RoKSAlIGxlbmd0aDtcbn1cbiJdfQ==