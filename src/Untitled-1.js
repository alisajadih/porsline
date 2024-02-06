[
  {
    id: "q1",
    type: "checkbox",
    options: [
      { value: 4, label: "" },
      { value: 5, label: "" },
    ],
    title: "q1",
  },
  {
    id: "q2",
    title: "q2",
    type: "radio",
    dependOn : [
        {id : 'q1' , values : 5}
    ],
    options: [
      { value: 3, label: "" },
      { value: 4, lable: "" },
    ],
  },
  { id: "q3", title: "q3", type: "text" },
];
