import type { ReactNode } from 'react';
import type { OverrideT } from '../helpers/overrides';
export declare type ProgressStepsOverridesT = {
    Root?: OverrideT<any>;
    StepRoot?: OverrideT<any>;
    Icon?: OverrideT<any>;
    InnerIcon?: OverrideT<any>;
    Tail?: OverrideT<any>;
    Content?: OverrideT<any>;
    Title?: OverrideT<any>;
    Description?: OverrideT<any>;
};
export declare type ProgressStepsPropsT = {
    overrides?: ProgressStepsOverridesT;
    children?: ReactNode;
    /** Defines the current active step index. */
    current: number;
};
export declare type StepOverridesT = {
    Root?: OverrideT<any>;
    Icon?: OverrideT<any>;
    InnerIcon?: OverrideT<any>;
    Tail?: OverrideT<any>;
    Content?: OverrideT<any>;
    Title?: OverrideT<any>;
    Description?: OverrideT<any>;
};
export declare type StepPropsT = {
    /** The title of the Step. */
    title?: ReactNode;
    /** Defines if the step is completed. */
    isCompleted: boolean;
    /** Defines if the step is currently active. */
    isActive: boolean;
    /** Defines if the step is the last item displayed. */
    isLast: boolean;
    overrides?: StepOverridesT;
    children?: ReactNode;
};
export declare type NumberedStepOverridesT = {
    Root?: OverrideT<any>;
    Icon?: OverrideT<any>;
    InnerIcon?: OverrideT<any>;
    Tail?: OverrideT<any>;
    Content?: OverrideT<any>;
    Title?: OverrideT<any>;
    Description?: OverrideT<any>;
};
export declare type NumberedStepPropsT = {
    /** The title of the Step. */
    title?: string;
    /** Defines if the step is completed. */
    isCompleted: boolean;
    /** Defines if the step is currently active. */
    isActive: boolean;
    /** Defines if the step is the last item displayed. */
    isLast: boolean;
    overrides?: NumberedStepOverridesT;
    children?: ReactNode;
    /** The number displayed as the step number */
    step?: ReactNode;
};
export declare type StylePropsT = {
    $isActive: boolean;
    $isCompleted: boolean;
    $disabled: boolean;
};
