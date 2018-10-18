/**
 * Extracts the first type for a given class constructor
 */
export declare type FirstArgumentFromConstructor<T> = T extends new (arg1: infer U, ...args: any[]) => any ? U : any;
