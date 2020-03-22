/// <reference types="react" />
import type { StatefulPaginationPropsT } from './types';
declare function StatefulPagination({ numPages, initialState, stateReducer, onPageChange, ...props }: StatefulPaginationPropsT): JSX.Element;
declare namespace StatefulPagination {
    var defaultProps: {
        initialState: {
            currentPage: number;
        };
        stateReducer: (changeType: any, changes: any) => any;
        overrides: {};
    };
}
export default StatefulPagination;
