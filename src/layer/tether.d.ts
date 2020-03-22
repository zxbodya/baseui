import * as React from 'react';
import Popper from 'popper.js';
import type { TetherPropsT, TetherStateT, PopperDataObjectT } from './types';
declare class Tether extends React.Component<TetherPropsT, TetherStateT> {
    static defaultProps: {
        anchorRef: any;
        onPopperUpdate: () => any;
        placement: "auto";
        popperRef: any;
        popperOptions: {};
    };
    popper?: Popper;
    popperHeight: number;
    state: {
        isMounted: boolean;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: TetherPropsT, prevState: TetherStateT): void;
    componentWillUnmount(): void;
    initializePopper(): void;
    onPopperUpdate: (data: PopperDataObjectT) => void;
    destroyPopover(): void;
    render(): {};
}
export default Tether;
