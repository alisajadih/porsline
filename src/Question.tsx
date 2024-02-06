import { Box, Typography } from "@mui/material";
import { CheckboxAnswer } from "./components/CheckboxAnswer";
import { RadioBoxAnswer } from "./components/RadioBoxAnswer";
import { TextAnswer } from "./components/TextAnswer";
import { AnswerType, Question } from "./types";

interface Props {
  question: Question;
  onChangeAnswer: (answer: AnswerType) => void;
  answer: AnswerType;
}

// const components: Record<QuestionType, React.ElementType> = {
//   radio: RadioBoxAnswer,
//   checkbox: CheckboxAnswer,
//   text: TextAnswer,
// };
export const QuestionView = (props: Props) => {
  //   const handleChange: React.ChangeEventHandler<
  //     HTMLInputElement | HTMLTextAreaElement
  //   > = (e) => {
  //     props.onChangeAnswer(e.target.value);
  //   };
  const type = props.question.type;
  return (
    <div>
      <Typography variant="h4">{props.question.question}</Typography>
      <Box mt={2}>
        {type === "checkbox" && (
          <CheckboxAnswer
            value={props.answer as number[]}
            onChange={props.onChangeAnswer}
            possibleAnswers={props.question.possibleAnswers}
          />
        )}
        {type === "radio" && (
          <RadioBoxAnswer
            value={props.answer as number}
            onChange={props.onChangeAnswer}
            possibleAnswers={props.question.possibleAnswers}
          />
        )}
        {type === "text" && (
          <TextAnswer
            value={props.answer as string}
            onChange={props.onChangeAnswer}
          />
        )}
      </Box>
    </div>
  );
};
