import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { Id, PossibleAnswer } from "../types";

interface Props {
  possibleAnswers: PossibleAnswer[];
  value: Id;
  onChange: (value: Id) => void;
}

export function RadioBoxAnswer(props: Props) {
  const handleRadioGroupChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.onChange(+event.target.value);
  };
  return (
    <RadioGroup onChange={handleRadioGroupChange}>
      {props.possibleAnswers.map((answer) => (
        <FormControlLabel
          key={answer.id}
          control={<Radio value={answer.id} />}
          label={answer.label}
        />
      ))}
    </RadioGroup>
  );
}
