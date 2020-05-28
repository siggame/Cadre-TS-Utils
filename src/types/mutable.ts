/**
 * Forces an object's properties to be mutable.
 *
 * The opposite of `Readonly`.
 */

import { Primitive } from "./primitive";

/**
 * Forces an object's properties to be mutable,and deep recursive into
 * containers too.
 *
 * The opposite of `Immutable`.
 *
 * @see Immutable
 */
export type Mutable<T> = T extends Primitive
    ? T
    : T extends Array<infer E>
    ? MutableArray<E>
    : T extends Map<infer K, infer V>
    ? MutableMap<K, V>
    : T extends object // eslint-disable-line @typescript-eslint/ban-types
    ? MutableObject<T>
    : T; // this should only be `unknown` or `any`.

/** An Array where itself, and all it's children, and so on, are writeable. */
export type MutableArray<T> = Array<Mutable<T>>;

/** A Map where itself, and all it's children, and so on, are writeable. */
export type MutableMap<K, V> = Map<Mutable<K>, Mutable<V>>;

/** An object where itself, and all it's children, and so on, are writeable. */
export type MutableObject<T> = {
    -readonly [K in keyof T]: Mutable<T[K]>;
};
