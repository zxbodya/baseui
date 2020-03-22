import * as React from 'react';
export declare type ConfigurationOverrideFunctionT = (a: any) => any | undefined | null;
export declare type ConfigurationOverrideObjectT = {
    [k: string]: any;
};
export declare type ConfigurationOverrideT = ConfigurationOverrideObjectT | ConfigurationOverrideFunctionT;
export declare type StyleOverrideT = ConfigurationOverrideT;
export declare type OverrideObjectT<T> = {
    component?: React.ComponentType<T> | null;
    props?: ConfigurationOverrideT | null;
    style?: ConfigurationOverrideT | null;
};
export declare type OverrideT<T> = OverrideObjectT<T> | (React.ComponentType<T> & OverrideObjectT<T>);
export declare type OverridesT<T> = {
    [x: string]: OverrideT<T>;
};
/**
 * Given an override argument, returns the component implementation override if it exists
 */
export declare function getOverride(override: any): any;
/**
 * Given an override argument, returns the override props that should be passed
 * to the component when rendering it.
 */
export declare function getOverrideProps<T>(override?: OverrideT<T> | null): {};
/**
 * Coerces an override argument into an override object
 * (sometimes it is just an override component)
 */
export declare function toObjectOverride<T>(override: OverrideT<T>): OverrideObjectT<T>;
/**
 * Get a convenient override array that will always have [component, props]
 */
export declare function getOverrides(override: any, defaultComponent: React.ComponentType<any>): [React.ComponentType<any>, {
    [k: string]: any;
}];
/**
 * Merges two overrides objects – this is useful if you want to inject your own
 * overrides into a child component, but also accept further overrides from
 * from upstream. See `mergeOverride` below.
 */
export declare function mergeOverrides<T>(target?: OverridesT<T>, source?: OverridesT<T>): OverridesT<T>;
/**
 * Merges two override objects using the following behavior:
 * - Component implementation from the source (parent) replaces target
 * - Props and styles are both deep merged
 */
export declare function mergeOverride<T>(target: OverrideObjectT<T>, source: OverrideObjectT<T>): OverrideObjectT<T>;
/**
 * Since style or props overrides can be an object *or* a function, we need to handle
 * the case that one of them is a function. We do this by returning a new
 * function that deep merges the result of each style override
 */
export declare function mergeConfigurationOverrides(target: ConfigurationOverrideT, source: ConfigurationOverrideT): ConfigurationOverrideT;
