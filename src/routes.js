import { useRoutes } from "react-router";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";
import NotFound from "./pages/NotFound";

export const Routes = () => {
  const route = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/item/" + ":id",
      element: <ItemDetails />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ];

  return useRoutes(route);
};
