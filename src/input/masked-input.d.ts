/// <reference types="react" />
import type { MaskedInputPropsT } from './types';
declare function MaskedInput({ mask, maskChar, overrides: { Input: inputOverride, ...restOverrides }, ...restProps }: MaskedInputPropsT): JSX.Element;
declare namespace MaskedInput {
    var defaultProps: {
        maskChar: string;
    };
}
export default MaskedInput;
