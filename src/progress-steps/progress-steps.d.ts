/// <reference types="react" />
import type { ProgressStepsPropsT } from './types';
declare function ProgressSteps({ overrides, current, children, }: ProgressStepsPropsT): JSX.Element;
declare namespace ProgressSteps {
    var defaultProps: {
        current: number;
    };
}
export default ProgressSteps;
