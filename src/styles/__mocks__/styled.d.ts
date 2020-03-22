import * as React from 'react';
import type { ThemeT } from '../../styles/types';
import type { StyletronComponent } from '../styled';
declare type ObjOrFnT = {} | ((a: {}) => {});
declare type PropsT = {
    $style?: ObjOrFnT;
    $theme?: ThemeT;
    forwardedRef: any;
};
export declare function useStyletron(): {}[];
export declare function styled(ElementName: string | React.ComponentType<any>, objOrFn?: ObjOrFnT): React.ForwardRefExoticComponent<PropsT & React.RefAttributes<HTMLElement>>;
export declare const withStyle: typeof styled;
export declare function withWrapper(StyledElement: StyletronComponent<any>, wrapperFn: (a: StyletronComponent<any>) => (a: any) => any): React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<any>>;
export {};
