import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuPublico from "./componentes/MenuPublico";
import MenuPrivado from "./componentes/MenuPrivado";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./componentes/telas/NotFound";
import Sobre from "./componentes/Sobre";
import Produto from "./componentes/telas/produto/Produto";
import Login from "./componentes/telas/login/Login";
import Home from "./componentes/telas/home/Home";
import Avaliacao from "./componentes/telas/avaliacao/Avaliacao";
import Categoria from "./componentes/telas/categoria/Categoria";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPublico />,
    children: [
      {
        index: "true",
        element: <Home />,
      },
      {
        path: "produto/:id",
        element: <Avaliacao />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/privado",
    element: <MenuPrivado />,
    children: [
      {
        index: "true",
        element: <Home />,
      },
      {
        path: "produto/:id",
        element: <Avaliacao />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "produtos",
        element: <Produto />,
      },
      {
        path: "categorias",
        element: <Categoria />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
