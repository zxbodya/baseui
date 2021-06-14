import * as React from 'react';

import {useStyletron} from 'baseui';
import {Button} from 'baseui/button';
import {FormControl} from 'baseui/form-control';
import {Select} from 'baseui/select';

import {
  SnackbarProvider,
  useSnackbar,
  PLACEMENT, PlacementT,
} from 'baseui/snackbar';

const options = Object.keys(PLACEMENT).map(key => {
  return {label: PLACEMENT[key], id: PLACEMENT[key]};
});

function Child({placement}: {placement: string}) {
  const {enqueue} = useSnackbar();
  return (
    <div>
      <Button onClick={() => enqueue({message: placement})}>
        Enqueue {placement}
      </Button>
    </div>
  );
}

export default function Parent() {
  const [css] = useStyletron();
  const [placement, setPlacement] = React.useState<PlacementT>(PLACEMENT.top);

  return (
    <div className={css({width: '320px'})}>
      <SnackbarProvider placement={placement}>
        <FormControl label="Choose placement">
          <Select
            options={options}
            onChange={({value}) =>
              setPlacement(value[0].id as PlacementT)
            }
            value={[{id: placement}]}
            clearable={false}
          />
        </FormControl>
        <Child placement={placement} />
      </SnackbarProvider>
    </div>
  );
}
