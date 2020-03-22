/// <reference types="react" />
import type { NumberedStepPropsT } from './types';
declare function NumberedStep({ overrides, isCompleted, isActive, isLast, title, step, children, }: NumberedStepPropsT): JSX.Element;
declare namespace NumberedStep {
    var defaultProps: {
        isCompleted: boolean;
        isActive: boolean;
        isLast: boolean;
    };
}
export default NumberedStep;
