/// <reference types="react" />
import type { StatefulListPropsT, StateReducerT } from './types';
declare function StatefulList(props: StatefulListPropsT): JSX.Element;
declare namespace StatefulList {
    var defaultProps: {
        initialState: {
            items: any[];
        };
        stateReducer: StateReducerT;
    };
}
export default StatefulList;
