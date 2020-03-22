/// <reference types="react" />
import type { StatefulPopoverPropsT } from './types';
declare function StatefulPopover(props: StatefulPopoverPropsT): JSX.Element;
declare namespace StatefulPopover {
    var defaultProps: {
        accessibilityType: "menu";
        ignoreBoundary: boolean;
        overrides: {};
        onMouseEnterDelay: number;
        onMouseLeaveDelay: number;
        placement: "auto";
        showArrow: boolean;
        triggerType: "click";
        dismissOnClickOutside: boolean;
        dismissOnEsc: boolean;
        stateReducer: (_: any, nextState: any) => any;
    };
}
export default StatefulPopover;
