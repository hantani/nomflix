import { createBrowserRouter } from "react-router-dom";
import RootComponent from "./Root";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "tv",
        element: <Tv />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "movies/:movieId",
        element: <Home />,
      },
    ],
  },
]);

export default router;
