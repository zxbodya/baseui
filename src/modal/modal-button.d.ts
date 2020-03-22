import * as React from 'react';
import { Button } from '../button/index';
import type { ComponentProps } from 'react';
export default class ModalButton extends React.Component<ComponentProps<typeof Button>> {
    static defaultProps: {
        disabled: boolean;
        isLoading: boolean;
        isSelected: boolean;
        kind: "primary";
        overrides: {};
        shape: "default";
        size: "default";
    };
    render(): JSX.Element;
}
