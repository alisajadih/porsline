import { TextField } from "@mui/material";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function TextAnswer(props: Props) {
  return (
    <TextField
      value={props.value || ""}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
}
