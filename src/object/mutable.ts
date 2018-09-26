/**
 * Forces an object's properties to be mutable.
 *
 * The opposite of `Readonly`.
 */
export type Mutable<T> = { -readonly [P in keyof T]: T[P] };
