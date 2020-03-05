import * as React from 'react';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import type {ComponentProps} from 'react';

const itemProps: ComponentProps<typeof FlexGridItem> = {
  backgroundColor: 'mono300',
  height: 'scale1000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function Example() {
  return (
    <FlexGrid
      flexGridColumnCount={[2, 3, 5, 7]}
      flexGridColumnGap="scale800"
      flexGridRowGap="scale800"
    >
      <FlexGridItem {...itemProps}>1</FlexGridItem>
      <FlexGridItem {...itemProps}>2</FlexGridItem>
      <FlexGridItem {...itemProps}>3</FlexGridItem>
      <FlexGridItem {...itemProps}>4</FlexGridItem>
      <FlexGridItem {...itemProps}>5</FlexGridItem>
      <FlexGridItem {...itemProps}>6</FlexGridItem>
      <FlexGridItem {...itemProps}>7</FlexGridItem>
      <FlexGridItem {...itemProps}>8</FlexGridItem>
      <FlexGridItem {...itemProps}>9</FlexGridItem>
      <FlexGridItem {...itemProps}>10</FlexGridItem>
      <FlexGridItem {...itemProps}>11</FlexGridItem>
    </FlexGrid>
  );
}
