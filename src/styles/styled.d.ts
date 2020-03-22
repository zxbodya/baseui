import * as React from 'react';
import { StyletronProps } from 'styletron-react';
import type { StyleObject } from 'styletron-standard';
import type { ThemeT } from './types';
export declare type StyletronComponent<Props extends object> = React.FunctionComponent<Props & StyletronProps<Props>> & {
    __STYLETRON__: any;
};
declare type StyleFn<DefaultTheme> = {
    <C extends keyof JSX.IntrinsicElements | React.ComponentType<any>, P extends object, Theme = DefaultTheme>(component: C, style: StyleObject | ((props: Omit<P, '$theme'> & {
        $theme: Theme;
    }) => StyleObject)): StyletronComponent<Omit<React.ComponentProps<C>, 'className'> & P>;
    <C extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(component: C, style: StyleObject): StyletronComponent<Omit<React.ComponentProps<C>, 'className'>>;
};
declare type WithStyleFn<DefaultTheme> = {
    <C extends StyletronComponent<any>, P extends object, Theme = DefaultTheme>(component: C, style: ((props: Omit<P, '$theme'> & {
        $theme: Theme;
    }) => StyleObject) | StyleObject): StyletronComponent<React.ComponentProps<C> & P>;
    <C extends StyletronComponent<any>>(component: C, style: StyleObject): StyletronComponent<React.ComponentProps<C>>;
};
export declare function createThemedStyled<Theme>(): StyleFn<Theme>;
export declare const styled: StyleFn<ThemeT>;
export declare function createThemedWithStyle<Theme>(): WithStyleFn<Theme>;
export declare const withStyle: WithStyleFn<ThemeT>;
declare type UseStyletronFn<Theme> = () => [(a: StyleObject) => string, Theme];
export declare function createThemedUseStyletron<Theme>(): UseStyletronFn<Theme>;
export declare const useStyletron: UseStyletronFn<ThemeT>;
export declare function withWrapper(StyledElement: StyletronComponent<any>, wrapperFn: (a: StyletronComponent<any>) => (a: any) => any): import("styletron-react/src/types").StyletronComponent<any>;
export {};
