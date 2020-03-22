/// <reference types="react" />
import type { CalendarPropsT, StatefulDatepickerPropsT } from './types';
declare function StatefulComponent(props: StatefulDatepickerPropsT<CalendarPropsT> & Omit<CalendarPropsT, keyof StatefulDatepickerPropsT<CalendarPropsT>>): JSX.Element;
declare namespace StatefulComponent {
    var defaultProps: {
        initialState: {};
        stateReducer: (type: any, nextState: any) => any;
        onSelect: () => void;
    };
}
export default StatefulComponent;
