

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './blog.css';

import ReactDOM from "react-dom/client"; //Se importó ReactDOM
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //Se importaron createBrowserRouterm, RouterProvider
import { Home, About, Error404, NewRoutes, PathRoutes, PersonalError, Hooks, HookClickEvent, HookUseState, HookOnChange,
HookVariousEvents, HookUseEfect, HookCustom, HookUseNavigate, HookUseLocation, HookUseRef } from "./pages";
import { FrontLayout, RoutesQueryString } from "./components";
import HookUseLoaderData, {loader as paisesLoader} from "./pages/hooks/HookUseLoaderData";
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
        },
        { /* Hooks */},
        {
          path: '/hooks',
          element: <Hooks/>,
        },
        {
          path: '/hooks/evento/click',
          element: <HookClickEvent/>,
        },
        {
          path: '/hooks/useState',
          element: <HookUseState/>,
        },
        {
          path: '/hooks/onChage',
          element: <HookOnChange/>,
        },
        {
          path: '/hooks/variousEvents',
          element: <HookVariousEvents/>,
        },
        {
          path: '/hooks/useEfect',
          element: <HookUseEfect/>,
        },
        {
          path: '/hooks/customeHooks',
          element: <HookCustom/>,
        },
        {
          path: '/hooks/useLoaderData',
          element: <HookUseLoaderData/>,
          loader: paisesLoader
        },
        {
          path: '/hooks/useNavigate',
          element: <HookUseNavigate/>,
        },
        {
          path: '/hooks/useLocation',
          element: <HookUseLocation/>,
        },
        {
          path: '/hooks/useRef',
          element: <HookUseRef/>,
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
