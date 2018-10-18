/** An object with all values being a certain type. */
export interface TypedObject<T = unknown> {
    [key: string]: T | undefined;
}
