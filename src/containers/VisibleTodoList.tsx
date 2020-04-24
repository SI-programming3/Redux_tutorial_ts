import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";

const getVisibleTodos = (todos: any, filter: any) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t: any) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t: any) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state: any) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

/*
filter関数で、completedがfalseなもの（active）のみを抽出したり、
  completedがtrueなもの（completed）のみを抽出している。
子コンポーネントのTodoListに渡すtodosはfilter関数を通したもの。
TodoListに渡すtoggleTodoは、引数にidを必要とする関数として渡される。
  actionのtoggleTodoにてtypeとidをつけてreducerで処理される。
*/
