import * as React from 'react';
import {Datepicker} from 'baseui/datepicker';

export default () => {
  // todo: name does not reflect types expected by component
  const [singleDate, setSingleDate] = React.useState<null|Date|Date[]>();
  return (
    <Datepicker
      value={singleDate || null}
      onChange={({date}) => setSingleDate(date)}
      overrides={{
        // MonthYearSelectStatefulMenu is a Menu component
        // We can use any overrides available to Menu
        MonthYearSelectStatefulMenu: {
          props: {
            overrides: {
              ListItem: {
                style: ({
                  $isHighlighted,
                }: {
                  $isHighlighted: boolean;
                }) => {
                  return $isHighlighted
                    ? {
                        color: 'white',
                        backgroundColor: 'salmon',
                      }
                    : null;
                },
              },
            },
          },
        },
        // Input override is the MaskedInput Base Web component.
        // We can use any overrides available to MaskedInput
        Input: {
          props: {
            overrides: {
              Input: {
                props: {
                  readonly: 'readonly',
                },
              },
            },
          },
        },
      }}
    />
  );
};
