import * as React from 'react';
declare type PropsT = {
    children: React.ReactNode;
    exclude: boolean;
    onExcludeChange: () => void;
    onApply: () => void;
};
declare function FilterShell(props: PropsT): JSX.Element;
export default FilterShell;
