/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';
import ReactDOM from 'react-dom';
import {getOverrides, mergeOverrides} from '../helpers/overrides.js';
import {KIND, PLACEMENT} from './constants.js';
import {
  Root as StyledRoot,
  Body as StyledBody,
  CloseIconSvg as StyledCloseIcon,
} from './styled-components.js';
import Toast from './toast.js';
import {
  ToasterPropsT,
  ToastPropsShapeT,
  ToasterContainerStateT,
  ToastPropsT,
} from './types.js';

let toasterRef:
  | React.RefObject<typeof ToasterContainer>
  | undefined
  | null = null;

export class ToasterContainer extends React.Component<
  Partial<ToasterPropsT>,
  ToasterContainerStateT
> {
  static defaultProps: ToasterPropsT = {
    placement: PLACEMENT.top,
    usePortal: true,
    overrides: {},
    autoHideDuration: 0,
  };

  constructor(props: ToasterPropsT) {
    super(props);
    toasterRef = this;
  }

  state = {
    isMounted: false,
    toasts: [],
  };

  dismissHandlers = {};

  toastId: number = 0;

  componentDidMount() {
    this.setState({isMounted: true});
  }

  getToastProps = (
    props: ToastPropsT,
  ): ToastPropsShapeT & {
    key: React.Key;
  } => {
    const {autoHideDuration} = this.props;
    const key: React.Key = props.key || `toast-${this.toastId++}`;
    // $FlowFixMe
    return {autoHideDuration, ...props, key};
  };

  show = (props: ToastPropsT = {}): React.Key => {
    const toastProps = this.getToastProps(props);
    this.setState(({toasts}) => {
      toasts.push(toastProps);
      return {toasts};
    });
    return toastProps.key;
  };

  update = (key: React.Key, props: ToastPropsT): void => {
    this.setState(({toasts}) => {
      toasts.forEach((t, index, arr) => {
        if (t.key === key) {
          arr[index] = {...t, ...this.getToastProps(props), key};
        }
      });
      return {
        toasts,
      };
    });
  };

  dismiss = (key: React.Key) => {
    if (this.dismissHandlers[key]) {
      this.dismissHandlers[key]();
    }
  };

  clearAll = () => {
    Object.keys(this.dismissHandlers).forEach(key => {
      this.dismissHandlers[key]();
    });
  };

  clear = (key?: React.Key) => {
    key === undefined ? this.clearAll() : this.dismiss(key);
  };

  internalOnClose = (key: React.Key) => {
    delete this.dismissHandlers[key];
    this.setState(({toasts}) => ({
      toasts: toasts.filter(t => {
        return !(t.key === key);
      }),
    }));
  };

  getOnCloseHandler = (key: React.Key, onClose?: (() => unknown) | null) => {
    return () => {
      this.internalOnClose(key);
      typeof onClose === 'function' && onClose();
    };
  };

  renderToast = (
    toastProps: ToastPropsT & {
      key: React.Key;
    },
  ): React.ReactNode => {
    const {onClose, children, key, ...restProps} = toastProps;

    const {
      ToastBody: BodyOverride,
      ToastCloseIcon: CloseIconOverride,
    } = this.props.overrides;
    const globalToastOverrides = mergeOverrides(
      {Body: StyledBody, CloseIcon: StyledCloseIcon},
      // $FlowFixMe
      {Body: BodyOverride, CloseIcon: CloseIconOverride},
    );
    const toastOverrides = mergeOverrides(
      globalToastOverrides,
      toastProps.overrides,
    );

    return (
      <Toast
        {...restProps}
        overrides={toastOverrides}
        key={key}
        onClose={this.getOnCloseHandler(key, onClose)}
      >
        {({dismiss}) => {
          this.dismissHandlers[key] = dismiss;
          // $FlowFixMe
          return children;
        }}
      </Toast>
    );
  };

  getSharedProps = () => {
    const {placement} = this.props;
    return {
      $placement: placement,
    };
  };

  render() {
    const sharedProps = this.getSharedProps();

    const {Root: RootOverride} = this.props.overrides;
    const [Root, rootProps] = getOverrides(RootOverride, StyledRoot);

    const toastsLength = this.state.toasts.length;
    const toastsToRender = [];
    // render the toasts from the newest at the start
    // to the oldest at the end
    // eslint-disable-next-line for-direction
    for (let i = toastsLength - 1; i >= 0; i--) {
      // $FlowFixMe
      toastsToRender.push(this.renderToast(this.state.toasts[i]));
    }

    const root = (
      <Root data-baseweb="toaster" {...sharedProps} {...rootProps}>
        {toastsToRender}
      </Root>
    );
    if (this.state.isMounted) {
      // Only render on the browser (portals aren't supported server-side)
      if (this.props.usePortal) {
        if (__BROWSER__) {
          return ReactDOM.createPortal(
            root,
            // $FlowFixMe
            document.body,
          );
        }
      } else {
        return root;
      }
    }
    return null;
  }
}

const toaster = {
  getRef: function():
    | React.RefObject<typeof ToasterContainer>
    | undefined
    | null {
    return toasterRef;
  },
  show: function(
    children: React.ReactNode,
    props: ToastPropsShapeT = {},
  ): React.Key | undefined | null {
    // toasts can not be added until Toaster is mounted
    // no SSR for the `toaster.show()`
    const toasterInstance = this.getRef();
    if (toasterInstance) {
      return toasterInstance.show({children, ...props});
    } else if (__DEV__) {
      throw new Error('Can not add any toasts until Toaster is mounted!');
    }
  },
  info: function(
    children: React.ReactNode,
    props: ToastPropsShapeT = {},
  ): React.Key {
    return this.show(children, {...props, kind: KIND.info});
  },
  positive: function(
    children: React.ReactNode,
    props: ToastPropsShapeT = {},
  ): React.Key {
    return this.show(children, {...props, kind: KIND.positive});
  },
  warning: function(
    children: React.ReactNode,
    props: ToastPropsShapeT = {},
  ): React.Key {
    return this.show(children, {...props, kind: KIND.warning});
  },
  negative: function(
    children: React.ReactNode,
    props: ToastPropsShapeT = {},
  ): React.Key {
    return this.show(children, {...props, kind: KIND.negative});
  },
  update: function(key: React.Key, props: Partial<ToastPropsT>): void {
    const toasterInstance = this.getRef();
    if (toasterInstance) {
      toasterInstance.update(key, props);
    } else if (__DEV__) {
      // eslint-disable-next-line no-console
      console.error('No ToasterContainer is mounted yet.');
    }
  },
  clear: function(key?: React.Key | undefined | null): void {
    const toasterInstance = this.getRef();
    if (toasterInstance) {
      toasterInstance.clear(key);
    } else if (__DEV__) {
      // eslint-disable-next-line no-console
      console.error('No ToasterContainer is mounted yet.');
    }
  },
};

export default toaster;
