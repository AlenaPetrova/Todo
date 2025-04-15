import CreateTodo from "../components/CreateTodo/CreateTodo";
import TodoList from "../components/TodoList/TodoList";

const MainPage: React.FC = () => {
  return (
    <>
      <h1>Todos</h1>
      <CreateTodo />
      <TodoList />
    </>
  );
};

export default MainPage;
