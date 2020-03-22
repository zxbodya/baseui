/// <reference types="react" />
import type { StepPropsT } from './types';
declare function Step({ overrides, isCompleted, isActive, isLast, title, children, }: StepPropsT): JSX.Element;
declare namespace Step {
    var defaultProps: {
        isCompleted: boolean;
        isActive: boolean;
        isLast: boolean;
    };
}
export default Step;
