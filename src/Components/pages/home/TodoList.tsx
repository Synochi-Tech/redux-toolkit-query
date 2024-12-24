import { Todo } from "../../../interfaces/todos";
import { useGetTodosQuery } from "../../../services/todos";
import { TodoItem } from "./TodoItem";

const TodoList = () => {
  const { data: response, isSuccess, isFetching } = useGetTodosQuery();
  return isFetching
    ? "Loading"
    : isSuccess &&
        response.data.map((todo: Todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ));
};

export default TodoList;
