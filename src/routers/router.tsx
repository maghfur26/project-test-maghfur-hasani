import { createBrowserRouter } from "react-router-dom";
import HomePages from "../pages/homePages";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePages />,
      },
      {
        path: "/ideas",
        element: <HomePages />,
      },
      {
        path: "/work",
        element: <HomePages />,
      },
      {
        path: "/about",
        element: <HomePages />,
      },
      {
        path: "/service",
        element: <HomePages />,
      },
      {
        path: "/careers",
        element: <HomePages />,
      },
      {
        path: "/contact",
        element: <HomePages />,
      },
    ],
  },
]);

export default router;
