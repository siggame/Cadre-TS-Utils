import { Primitive } from "./primitive";

/** Marks everything in the type as readonly. */
export type ShallowImmutable<T> =
    T extends Primitive ? T :
        T extends Array<infer U> ? ReadonlyArray<U> :
            T extends Map<infer K, infer V> ? ReadonlyMap<K, V> : Readonly<T>;
