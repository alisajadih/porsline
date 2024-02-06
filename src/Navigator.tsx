import { Box, Button } from "@mui/material";

interface Props {
  step: number;
  onStepChange: (step: number) => void;
  isLastStep: boolean;
}

export const Navigator = (props: Props) => {
  const handleNext = () => {
    props.onStepChange(props.step + 1);
  };
  const handlePrev = () => {
    props.onStepChange(props.step - 1);
  };

  return (
    <Box mt={2}>
      <Button
        variant="contained"
        onClick={hankdleNext}
        disabled={props.isLastStep}
      >
        Next
      </Button>
      <Button
        variant="contained"
        onClick={handlePrev}
        disabled={props.step === 0}
      >
        Prev
      </Button>
      {props.isLastStep && (
        <Button variant="contained" type="submit">
          Submit Form
        </Button>
      )}
    </Box>
  );
};
