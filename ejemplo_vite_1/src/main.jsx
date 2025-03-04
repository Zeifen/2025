import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './../public/css/blog.css';

import ReactDOM from "react-dom/client"; //Se importó ReactDOM
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //Se importaron createBrowserRouterm, RouterProvider
import { Home, About, Error404, NewRoutes, PathRoutes, PersonalError } from "./pages";
import { FrontLayout, RoutesQueryString } from "./components";
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
          element: <RoutesQueryString/>,
          errorElement: <PersonalError />
        },
        {
          path: '*',
          element: <Error404 />
        }
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
