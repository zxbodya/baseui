import * as React from 'react';
import {styled} from 'baseui';
import {Select, ValueT as Value} from 'baseui/select';

const ColorSwatch = styled('div', (props: any) => {
  return {
    width: props.$theme.sizing.scale300,
    height: props.$theme.sizing.scale300,
    marginRight: props.$theme.sizing.scale200,
    display: 'inline-block',
    backgroundColor: props.$color,
    verticalAlign: 'baseline',
    ...props.$theme.borders.border400,
  };
});

const getLabel = ({option}: any) => {
  return (
    <React.Fragment>
      <ColorSwatch $color={option.color} />
      {option.id}
    </React.Fragment>
  );
};

function CustomLabel() {
  const [value, setValue] = React.useState<Value>([]);
  return (
    <Select
      options={[
        {id: 'AliceBlue', color: '#F0F8FF'},
        {id: 'AntiqueWhite', color: '#FAEBD7'},
        {id: 'Aqua', color: '#00FFFF'},
        {id: 'Aquamarine', color: '#7FFFD4'},
        {id: 'Azure', color: '#F0FFFF'},
        {id: 'Beige', color: '#F5F5DC'},
      ]}
      labelKey="id"
      valueKey="color"
      onChange={options => setValue(options.value)}
      value={value}
      getOptionLabel={getLabel}
      getValueLabel={getLabel}
    />
  );
}

export default CustomLabel;
