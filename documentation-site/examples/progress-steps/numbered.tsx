import * as React from 'react';
import {ProgressSteps, NumberedStep} from 'baseui/progress-steps';
import {Button, ButtonPropsT as ButtonProps} from 'baseui/button';
import {useStyletron} from 'baseui';

function SpacedButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      overrides={{
        BaseButton: {
          style: ({$theme}) => ({
            marginLeft: $theme.sizing.scale200,
            marginRight: $theme.sizing.scale200,
            marginTop: $theme.sizing.scale200,
          }),
        },
      }}
    />
  );
}

function ProgressStepsContainer() {
  const [current, setCurrent] = React.useState(0);
  const [useCss, theme] = useStyletron();
  return (
    <ProgressSteps current={current}>
      <NumberedStep title="Create Account">
        <div className={useCss({...theme.typography.font400})}>
          Here is some step content
        </div>
        <SpacedButton disabled>Previous</SpacedButton>
        <SpacedButton onClick={() => setCurrent(1)}>
          Next
        </SpacedButton>
      </NumberedStep>
      <NumberedStep title="Verify Payment">
        <div className={useCss({...theme.typography.font400})}>
          Here is some more content
        </div>
        <SpacedButton onClick={() => setCurrent(0)}>
          Previous
        </SpacedButton>
        <SpacedButton onClick={() => setCurrent(2)}>
          Next
        </SpacedButton>
      </NumberedStep>
      <NumberedStep title="Add Payment Method">
        <div className={useCss({...theme.typography.font400})}>
          Here too!
        </div>
        <SpacedButton onClick={() => setCurrent(1)}>
          Previous
        </SpacedButton>
        <SpacedButton disabled>Next</SpacedButton>
      </NumberedStep>
    </ProgressSteps>
  );
}

export default ProgressStepsContainer;
