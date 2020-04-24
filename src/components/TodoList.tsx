import React from "react";
import Todo from "./Todo";

const TodoList: any = (todos: any, toggleTodo: any) => (
  <ul>
    {todos.map((todo: any) => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;

/*
VisibleTodoListから得たtodosとtoggleTodoで、Todosに対しmap関数でコピーし、全ての要素を
  Todoにスプレッド演算子を用いて渡している。
  この時、onClickはクリックされた際にtogglTodoにtodoのidを渡す処理をするようにしている。
*/
