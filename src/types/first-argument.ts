/* eslint-disable @typescript-eslint/no-explicit-any */

/** Extracts the first argument type from a function. */
export type FirstArgument<T> = T extends () => any
    ? never // will never have a first argument type
    : T extends (arg1: infer U, ...args: any[]) => any
    ? U
    : never;
