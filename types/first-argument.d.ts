/** Extracts the first argument type from a function */
export declare type FirstArgument<T> = T extends () => any ? never : T extends ((arg1: infer U, ...args: any[]) => any) ? U : never;
