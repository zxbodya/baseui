import * as React from 'react';
import type { LocaleT } from './types';
export declare const LocaleContext: React.Context<LocaleT>;
declare const LocaleProvider: (props: {
    locale: Partial<LocaleT>;
    children: React.ReactNode;
}) => JSX.Element;
export default LocaleProvider;
