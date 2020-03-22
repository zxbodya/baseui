/// <reference types="react" />
import type { StatefulComponentPropsT } from './types';
declare function StatefulComponent(props: StatefulComponentPropsT): JSX.Element;
declare namespace StatefulComponent {
    var defaultProps: Partial<import("./types").StatefulComponentContainerPropsT>;
}
export default StatefulComponent;
