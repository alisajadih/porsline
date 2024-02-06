import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { Id, PossibleAnswer } from "../types";

interface Props {
  possibleAnswers: PossibleAnswer[];
  value: number[];
  onChange: (value: number[]) => void;
}

export function CheckboxAnswer(props: Props) {
  const handleChange =
    (selectedId: Id): CheckboxProps["onChange"] =>
    (_, checked) => {
      if (checked) props.onChange([...(props.value || []), selectedId]);
      else props.onChange(props.value.filter((id) => id !== selectedId));
    };
  return (
    <FormGroup>
      {props.possibleAnswers.map((answer) => (
        <FormControlLabel
          key={answer.id}
          control={
            <Checkbox
              checked={!!(props.value || []).find((id) => id === answer.id)}
              onChange={handleChange(answer.id)}
            />
          }
          label={answer.label}
        />
      ))}
    </FormGroup>
  );
}
