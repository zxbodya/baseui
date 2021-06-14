declare type TimeoutID = any;
declare type AnimationFrameID = any;
declare var __NODE__: boolean;
declare var __BROWSER__: boolean;
declare var __DEV__: boolean;

declare var cancelIdleCallback: Function;
declare var requestIdleCallback: Function;

declare module '*.png' {
  const url: string;
  export default url;
}
