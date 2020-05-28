/** Primitive types in JS that are not containers. */
export type Primitive =
    | undefined
    | null
    | boolean
    | string
    | number
    | bigint
    | symbol
    // eslint-disable-next-line @typescript-eslint/ban-types
    | Function;
