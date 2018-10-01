// tslint:disable:no-any = required for TS mixin logic

/**
 * Extracts the first type for a given class constructor
 */
export type FirstArgumentFromConstructor<T> = T extends new (
    arg1: infer U,
    ...args: any[]
) => any ? U : any;
