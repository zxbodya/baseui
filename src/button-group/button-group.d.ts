import * as React from 'react';
import type { PropsT } from './types';
import type { ButtonGroupLocaleT } from './locale';
declare type LocaleT = {
    locale?: ButtonGroupLocaleT;
};
export declare class ButtonGroupRoot extends React.Component<{} & PropsT & LocaleT> {
    childRefs: {
        [key: number]: React.RefObject<any>;
    };
    render(): JSX.Element;
}
declare function ButtonGroup(props: PropsT): JSX.Element;
declare namespace ButtonGroup {
    var defaultProps: {
        disabled: boolean;
        onClick: () => void;
        shape: "default";
        size: "default";
        kind: "secondary";
    };
}
export default ButtonGroup;
