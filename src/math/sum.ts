/**
 * Sums up a set of numbers.
 *
 * @param numbers - The numbers to sum.
 * @returns The sum of all numbers passed.
 */
export function sum(...numbers: number[]): number {
    return numbers.reduce((s, n) => s + n, 0);
}
