/** An array with at least 1 or more items */
export type ArrayWithOneOrMore<T> = (
    [T] |
    { 0: T }
) & [T, ...T[]] & T[];
