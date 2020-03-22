import React from 'react';
import type { StatefulPhoneInputContainerPropsT, StateT, StateReducerT } from './types';
import type { OnChangeParamsT } from '../select/types';
export default class StatefulPhoneInputContainer extends React.Component<StatefulPhoneInputContainerPropsT, StateT> {
    static defaultProps: {
        initialState: {
            text: string;
            country: {
                label: string;
                id: string;
                dialCode: string;
            };
        };
        onTextChange: () => void;
        onCountryChange: () => void;
        stateReducer: StateReducerT;
        overrides: {};
    };
    state: StateT;
    internalSetState: (type: "textChange" | "countryChange", nextState: Partial<StateT>) => void;
    onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onCountryChange: (event: OnChangeParamsT) => void;
    render(): React.ReactNode;
}
