import React from "react";

const Todo: any = (onClick: () => any, completed: boolean, text: string) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);

export default Todo;

//やってることはLinkとほぼ同じ。
