import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Todo from "../pages/Todo";
import Layout from "../pages/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/:todoId",
        element: <Todo />,
      },
    ],
  },
]);
