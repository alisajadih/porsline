import { Question } from "./types";

export const data: Question[] = [
  {
    id: 1,
    type: "checkbox",
    question: "question 1",
    possibleAnswers: [
      {
        id: 1,
        label: "check 1",
      },
      {
        id: 2,
        label: "check 2",
      },
      {
        id: 3,
        label: "check 3",
      },
    ],
  },
  {
    id: 2,
    type: "radio",
    question: "question 2",
    possibleAnswers: [
      {
        id: 1,
        label: "radio 1",
      },
      {
        id: 2,
        label: "radio 2",
      },
      {
        id: 3,
        label: "radio 3",
      },
    ],
  },
  {
    id: 3,
    type: "text",
    question: "question 3",
    condition: [
      {
        id: 1,
        type: "checkbox",
        answer: [3, 2],
      },

      {
        id: 2,
        type: "radio",
        answer: 3,
      },
    ],
  },

  {
    id: 4,
    type: "text",
    question: "question 4",
  },
];
