import * as React from 'react';
export declare const withStyletronProvider: (Component: React.ComponentClass<any, any> | React.FunctionComponent<any>) => (props: {}) => JSX.Element;
export declare const withThemeProvider: (Component: React.ComponentClass<any, any> | React.FunctionComponent<any>) => (props: {}) => JSX.Element;
export declare const withAll: (Component: () => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>) => JSX.Element;
