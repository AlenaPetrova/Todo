import { useNavigate, useParams } from "react-router-dom";
import { useGetTodoQuery } from "../store";

const Todo: React.FC = () => {
  const { todoId } = useParams();
  console.log(todoId);
  const { data: todo } = useGetTodoQuery(todoId);
  const navigate = useNavigate();
  return (
    <>
      {todo ? (
        <div>
          <h1>Todo Info</h1>
          <p>id: {todo.id}</p>
          <p>title: {todo.title}</p>
          <p>completed: {"" + todo.completed}</p>
        </div>
      ) : (
        <p>Todo is not found</p>
      )}
      <button onClick={() => navigate(-1)}>back to list</button>
    </>
  );
};

export default Todo;
