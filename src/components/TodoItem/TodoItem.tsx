import { ITodo } from "../../types/types";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "../../store";
import { useState } from "react";
import { Link } from "react-router-dom";

const TodoItem: React.FC<ITodo> = ({ id, title, completed }) => {
  const [checked, setChecked] = useState(completed);

  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id).unwrap();
  };

  const handleUpdateTodo = async (id: string) => {
    setChecked(!checked);
    await updateTodo({ id, title, completed: !checked }).unwrap();
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleUpdateTodo(id)}
      />
      <Link to={`/${id}`}>{title}</Link>
      <button onClick={() => handleDeleteTodo(id)}> x </button>
    </li>
  );
};

export default TodoItem;
