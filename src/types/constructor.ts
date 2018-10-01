// tslint:disable:no-any = required for TS mixin logic

/**
 * Extracts a constructor for a given type.
 *
 * Useful for mixins.
 */
export type Constructor<T> = new (...args: any[]) => T;
