import * as React from 'react';
import type { StateT, StatefulPopoverContainerPropsT, StateChangeTypeT } from './types';
declare class StatefulContainer extends React.Component<StatefulPopoverContainerPropsT, StateT> {
    static defaultProps: Partial<StatefulPopoverContainerPropsT>;
    state: {
        isOpen: boolean;
    };
    onBlur: () => void;
    onClick: (e: Event) => void;
    onClickOutside: () => void;
    onEsc: () => void;
    onFocus: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onContentClose: () => void;
    open(): void;
    close(): void;
    internalSetState(type: StateChangeTypeT, changes: StateT): void;
    /**
     * If user passed a content render prop, we want to give them a
     * callback to close the Popover. This is useful in any case where
     * a dev wants to manually close the popover based on some action.
     *
     * One simple example is a Popover with a "Dismiss" button in it:
     * <StatefulPopover content={({close}) => <button onClick={close}>Dismiss</button>}>
     *  Click me
     * </StatefulPopover>
     */
    renderContent: () => any;
    render(): React.ReactNode;
}
export default StatefulContainer;
