import * as React from 'react';
import type { ThemeT } from './types';
export declare const ThemeContext: React.Context<ThemeT>;
declare const ThemeProvider: (props: {
    theme: ThemeT;
    children: React.ReactNode;
}) => JSX.Element;
export default ThemeProvider;
