import * as React from "react";
import { Navigator } from "./Navigator";
import { QuestionView } from "./Question";
import { data } from "./data";
import { Answer, AnswerType } from "./types";

function App() {



  const [currentStep, setCurrentStep] = React.useState(0);

  const [answers, setAnswers] = React.useState<Answer>({});

  const question = data[currentStep];

  const handleChangeAnswer = (value: AnswerType) => {
    // if (typeof value === "string" || typeof value === "number") // text or radio
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
  };

  const handleStepChange = (newStep: number) => {
    // setPrev(currentStep)
    // const nextQuestion = ques
    setCurrentStep(newStep);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <QuestionView
        question={question}
        answer={answers[question.id]}
        onChangeAnswer={handleChangeAnswer}
      />
      <Navigator
        step={currentStep}
        onStepChange={handleStepChange}
        isLastStep={currentStep === data.length - 1}
      />
    </form>
  );
}

export default App;
