/** An object with all values being a certain type. */
export interface ITypedObject<T = unknown> { [key: string]: T | undefined; }
