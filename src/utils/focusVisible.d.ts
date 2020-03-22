import * as React from 'react';
export declare function teardown(doc: any): void;
export declare function isFocusVisible(event: any): any;
/**
 * Should be called if a blur event is fired on a focus-visible element
 */
export declare function handleBlurVisible(): void;
export declare function initFocusVisible(node: any): void;
export declare const forkFocus: (rootProps: any, handler: (e: React.FocusEvent<Element>) => void) => (e: React.FocusEvent<Element>) => void;
export declare const forkBlur: (rootProps: any, handler: (e: React.FocusEvent<Element>) => void) => (e: React.FocusEvent<Element>) => void;
