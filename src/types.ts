export type Id = number;
export interface BaseQuestion {
  id: Id;
  question: string;
}

export interface TextQuestion extends BaseQuestion {
  type: "text";
}

export interface CheckboxQeustion extends BaseQuestion {
  type: "checkbox";
  possibleAnswers: PossibleAnswer[];
}

export interface RadioQuestion extends BaseQuestion {
  type: "radio";
  possibleAnswers: PossibleAnswer[];
}
export interface PossibleAnswer {
  label: string;
  id: Id;
}

export type QuestionType = 'text' | 'checkbox' | 'radio'

export type Question = TextQuestion | CheckboxQeustion | RadioQuestion;

export type AnswerType = string | Id | Id[];

export type Answer = Record<Id, AnswerType>; // Record< question-id , answer>
