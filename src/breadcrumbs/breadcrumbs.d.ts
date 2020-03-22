/// <reference types="react" />
import type { BreadcrumbsPropsT } from './types';
import type { BreadcrumbLocaleT } from './locale';
declare type LocaleT = {
    locale?: BreadcrumbLocaleT;
};
export declare function BreadcrumbsRoot(props: {} & BreadcrumbsPropsT & LocaleT): JSX.Element;
declare function Breadcrumbs(props: BreadcrumbsPropsT): JSX.Element;
declare namespace Breadcrumbs {
    var defaultProps: {
        overrides: {};
    };
}
export default Breadcrumbs;
