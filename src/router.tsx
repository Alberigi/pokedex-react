import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { CreatePokemons } from "./views/createPokemons";
import { Home } from "./views/Home";
import { ListPokemons } from "./views/listPokemons";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pokemons",
        element: <ListPokemons />,
      },
      {
        path: "/createPokemons",
        element: <CreatePokemons />,
      },
    ],
  },
]);
