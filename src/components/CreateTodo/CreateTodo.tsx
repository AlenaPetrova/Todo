import { useState } from "react";
import { useAddTodoMutation } from "../../store";

const CreateTodo: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const [addTodo /*, {isLoading}*/] = useAddTodoMutation();

  const handleAddTodo = async () => {
    if (newTodo) {
      await addTodo({ title: newTodo, completed: false }).unwrap();
      setNewTodo("");
    }
  };

  return (
    <label>
      <input
        type="text"
        placeholder="New todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add todo</button>
    </label>
  );
};

export default CreateTodo;
