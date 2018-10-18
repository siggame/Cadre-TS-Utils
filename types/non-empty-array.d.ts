/** An array with at least 1 or more items */
export declare type NonEmptyArray<T> = ([T] | {
    0: T;
}) & [T, ...T[]] & T[];
