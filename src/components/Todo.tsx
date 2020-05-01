import React from "react";

const Todo = (props: {
  onClick: () => any;
  completed: boolean;
  text: string;
}) => (
  <li
    onClick={props.onClick}
    style={{
      textDecoration: props.completed ? "line-through" : "none",
    }}
  >
    {props.text}
  </li>
);

export default Todo;

//やってることはLinkとほぼ同じ。
