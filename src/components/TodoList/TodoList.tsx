import { JSX } from "react/jsx-runtime";
import { useGetTodosQuery } from "../../store";
import { ITodo } from "../../types/types";
import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";

const TodoList: React.FC = () => {
  const [limit, setLimit] = useState("");
  const {
    data: todos,
    isLoading,
    error /*, refetch*/,
  } = useGetTodosQuery(limit /*, {pollingInterval:1000}*/);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && error && <h1>Error while receiving data!</h1>}

      {todos && todos?.length !== 0 ? (
        <div>
          <select value={limit} onChange={(e) => setLimit(e.target.value)}>
            <option value="">all</option>
            {todos.length >= 2 && <option value="2">2</option>}
            {todos.length === 5 && <option value="5">5</option>}
          </select>
          <ul>
            {todos.map((todo: JSX.IntrinsicAttributes & ITodo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </ul>
        </div>
      ) : (
        !isLoading && <div>The list is empty</div>
      )}
    </div>
  );
};
export default TodoList;
