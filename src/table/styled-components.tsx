/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {styled} from '../styles/index.js';
import {StyletronComponent} from '../styles/styled.js';

const StyledTableElement = styled<{}>('div', ({$theme}) => {
  return {
    ...$theme.borders.border300,
    backgroundColor: $theme.colors.tableBackground,
    borderTopLeftRadius: $theme.borders.radius200,
    borderTopRightRadius: $theme.borders.radius200,
    borderBottomRightRadius: $theme.borders.radius200,
    borderBottomLeftRadius: $theme.borders.radius200,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflowX: 'scroll',
  };
});

// eslint-disable-next-line flowtype/no-weak-types
export const StyledTable = (React.forwardRef<any, {}>((props, ref) => {
  return (
    <StyledTableElement
      ref={ref}
      data-baseweb="table-custom"
      role="grid"
      {...props}
    />
  );
  // eslint-disable-next-line flowtype/no-weak-types
}) as any) as StyletronComponent<{}>;
StyledTable.__STYLETRON__ = StyledTableElement.__STYLETRON__;
StyledTable.displayName = 'StyledTable';

type HorizontalStyleProps = {
  $width?: string;
};

const StyledHeadElement = styled<HorizontalStyleProps>(
  'div',
  ({$theme, $width}) => {
    return {
      backgroundColor: $theme.colors.tableHeadBackgroundColor,
      boxShadow: $theme.lighting.shadow400,
      display: 'flex',
      flexGrow: 0,
      width: $width ? $width : '100%',
    };
  },
);

// eslint-disable-next-line flowtype/no-weak-types
export const StyledHead = (React.forwardRef<any, HorizontalStyleProps>( // eslint-disable-next-line flowtype/no-weak-types
  (props, ref) => <StyledHeadElement ref={ref} role="row" {...props} />,
) as any) as StyletronComponent<HorizontalStyleProps>;
StyledHead.__STYLETRON__ = StyledHeadElement.__STYLETRON__;
StyledHead.displayName = 'StyledHead';

const StyledHeadCellElement = styled<{}>('div', ({$theme}) => {
  return {
    ...$theme.typography.font350,
    ...$theme.borders.border300,
    borderTop: 'none',
    borderBottom: 'none',
    borderLeft: 'none',
    color: $theme.colors.colorPrimary,
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: $theme.sizing.scale500,
    paddingRight: $theme.sizing.scale600,
    paddingBottom: $theme.sizing.scale500,
    paddingLeft: $theme.sizing.scale600,
    width: '100%',
    ':last-of-type': {
      borderRight: 'none',
    },
  };
});

// eslint-disable-next-line flowtype/no-weak-types
export const StyledHeadCell = (React.forwardRef<any, {}>((
  props,
  ref, // eslint-disable-next-line flowtype/no-weak-types
) => (
  <StyledHeadCellElement ref={ref} role="columnheader" {...props} />
)) as any) as StyletronComponent<{}>;
StyledHeadCell.__STYLETRON__ = StyledHeadCellElement.__STYLETRON__;
StyledHeadCell.displayName = 'StyledHeadCell';

export const StyledSortableLabel = styled<{}>('button', ({$theme}) => {
  return {
    ...$theme.typography.font350,
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    color: $theme.colors.colorPrimary,
    display: 'flex',
    padding: 0,
    ':hover:enabled': {
      cursor: 'pointer',
    },
    ':disabled': {
      color: $theme.colors.mono500,
    },
  };
});

const StyledBodyElement = styled<HorizontalStyleProps>('div', ({$width}) => {
  return {
    width: $width ? $width : '100%',
    overflowX: 'hidden',
    overflowY: 'overlay',
    flex: 1,
  } as {};
});

// eslint-disable-next-line flowtype/no-weak-types
export const StyledBody = (React.forwardRef<any, HorizontalStyleProps>( // eslint-disable-next-line flowtype/no-weak-types
  (props, ref) => <StyledBodyElement ref={ref} role="rowgroup" {...props} />,
) as any) as StyletronComponent<HorizontalStyleProps>;
StyledBody.__STYLETRON__ = StyledBodyElement.__STYLETRON__;
StyledBody.displayName = 'StyledBody';

const StyledRowElement = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

// eslint-disable-next-line flowtype/no-weak-types
export const StyledRow = (React.forwardRef<any, {}>((
  props,
  ref, // eslint-disable-next-line flowtype/no-weak-types
) => (
  <StyledRowElement ref={ref} role="row" {...props} />
)) as any) as StyletronComponent<{}>;
StyledRow.__STYLETRON__ = StyledRowElement.__STYLETRON__;
StyledRow.displayName = 'StyledRow';

type CellStyledProps = {
  $striped?: boolean;
};

const StyledCellElement = styled<CellStyledProps>(
  'div',
  ({$theme, $striped}) => {
    return {
      ...$theme.typography.font300,
      backgroundColor: $striped ? $theme.colors.tableStripedBackground : null,
      color: $theme.colors.colorPrimary,
      display: 'flex',
      flex: 1,
      paddingTop: $theme.sizing.scale300,
      paddingRight: $theme.sizing.scale600,
      paddingBottom: $theme.sizing.scale300,
      paddingLeft: $theme.sizing.scale600,
    };
  },
);

// eslint-disable-next-line flowtype/no-weak-types
export const StyledCell = (React.forwardRef<any, CellStyledProps>( // eslint-disable-next-line flowtype/no-weak-types
  (props, ref) => <StyledCellElement ref={ref} role="gridcell" {...props} />,
) as any) as StyletronComponent<CellStyledProps>;
StyledCell.__STYLETRON__ = StyledCellElement.__STYLETRON__;
StyledCell.displayName = 'StyledCell';

export const StyledFilterButton = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  paddingTop: 'none',
  paddingRight: 'none',
  paddingBottom: 'none',
  paddingLeft: 'none',
});

export const StyledFilterContent = styled<{}>('div', ({$theme}) => ({
  ...$theme.borders.border300,
  backgroundColor: $theme.colors.tableFilterBackground,
  borderRight: 'none',
  borderLeft: 'none',
  maxHeight: '196px',
  paddingRight: $theme.sizing.scale600,
  paddingLeft: $theme.sizing.scale600,
  overflow: 'auto',
}));

export const StyledFilterHeading = styled<{}>('div', ({$theme}) => ({
  ...$theme.typography.font350,
  color: $theme.colors.tableFilterHeading,
  paddingTop: $theme.sizing.scale500,
  paddingRight: $theme.sizing.scale600,
  paddingBottom: $theme.sizing.scale500,
  paddingLeft: $theme.sizing.scale600,
}));

export const StyledFilterFooter = styled<{}>('div', ({$theme}) => ({
  backgroundColor: $theme.colors.tableFilterFooterBackground,
  paddingTop: $theme.sizing.scale300,
  paddingRight: $theme.sizing.scale100,
  paddingBottom: $theme.sizing.scale300,
  paddingLeft: $theme.sizing.scale100,
  display: 'flex',
  justifyContent: 'space-between',
  minWidth: '216px',
}));

export const StyledAction = styled<{}>('button', ({$theme}) => {
  return {
    backgroundColor: 'transparent',
    border: 'none',
    color: $theme.colors.primary,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    marginRight: $theme.sizing.scale100,
    marginLeft: $theme.sizing.scale100,
    ':hover:enabled': {
      cursor: 'pointer',
    },
  };
});
