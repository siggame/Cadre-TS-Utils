import { Primitive } from "./primitive";
/** Marks any type as immutable, and deep recursive into containers too. */
export declare type Immutable<T> = T extends Primitive ? T : T extends Array<infer E> ? ReadonlyArray<E> : T extends Map<infer K, infer V> ? ReadonlyMap<K, V> : T extends object ? Readonly<T> : T;
/** An Array where itself, and all it's children, and so on, are readonly. */
export interface ImmutableArray<T> extends ReadonlyArray<Immutable<T>> {
}
/** A Map where itself, and all it's children, and so on, are readonly. */
export interface ImmutableMap<K, V> extends ReadonlyMap<Immutable<K>, Immutable<V>> {
}
/** An object where itself, and all it's children, and so on, are readonly. */
export declare type ImmutableObject<T> = {
    readonly [K in keyof T]: Immutable<T[K]>;
};
