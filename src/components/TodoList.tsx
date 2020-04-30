import React from "react";
import Todo from "./Todo";

const TodoList: any = (
  todos: { items: { completed: boolean; id: number; text: string }[] },
  toggleTodo: (id: number) => any
) => (
  <ul>
    {todos.items.map((todo) => (
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