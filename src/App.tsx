import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
};

export default App;
