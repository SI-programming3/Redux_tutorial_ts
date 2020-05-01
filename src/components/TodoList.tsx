import React from "react";
import Todo from "./Todo";
import { toggleTodo } from "../actions";
import { VisibilityFilters } from "../actions";
import { RootState } from "../reducers";
import { useDispatch, useSelector } from "react-redux";

const getVisibleTodos = (state: RootState, filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return state.todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return state.todos.filter((todos) => todos.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return state.todos.filter((todos) => !todos.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const TodoList = () => {
  const items = useSelector((state: RootState) =>
    getVisibleTodos(state, state.visibilityFilter)
  );
  const dispatch = useDispatch();
  return (
    <ul>
      {items.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => dispatch(toggleTodo(todo.id))}
        />
      ))}
    </ul>
  );
};

export default TodoList;

/*
VisibleTodoListから得たtodosとtoggleTodoで、Todosに対しmap関数でコピーし、全ての要素を
  Todoにスプレッド演算子を用いて渡している。
  この時、onClickはクリックされた際にtogglTodoにtodoのidを渡す処理をするようにしている。
  正直mapstatetopropsとかを先に書いてあとで書き換える方が楽そうに思える。
*/
