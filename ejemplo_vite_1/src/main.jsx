import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import ReactDOM from "react-dom/client"; //Se importó ReactDOM
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //Se importaron createBrowserRouterm, RouterProvider
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404'; //Rutas de los componentes de página
import NewRoutes from "./pages/NewRoutes";
import FrontLayout from "./components/FrontLayout";
import PathRoutes from "./pages/PathRoutes";
import RoutesQueryString from "./components/RoutesQueryString";

const router = createBrowserRouter
(
  [
    {
      path:'/',
      element: <FrontLayout />,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/routes',
          element: <NewRoutes/>
        },
        {
          path: '/routes/path/:var1/:var2',
          element: <PathRoutes/>
        },
        {
          path: '/routes/query-string',
          element: <RoutesQueryString/>
        },
      ]
    }
  ]
)

//Se creó la ruta con ReactDOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
