/**
 * Wraps an index around a given range.
 *
 * @param index - The number to wrap within 0 to length, so if this was -1 the
 * result would be length-1.
 * @param length - The right bound to wrap around back to 0 from.
 * @returns The index "wrapped around" 0 to length. 0 <= result < length.
 */
export function wrapAround(index: number, length: number): number {
    return ((index % length) + length) % length;
}
