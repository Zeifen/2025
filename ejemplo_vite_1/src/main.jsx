import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./blog.css";

import ReactDOM from "react-dom/client"; //Se importó ReactDOM
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //Se importaron createBrowserRouterm, RouterProvider
import {
  Home,
  About,
  Error404,
  NewRoutes,
  PathRoutes,
  PersonalError,
  Hooks,
  HookClickEvent,
  HookUseState,
  HookOnChange,
  HookVariousEvents,
  HookUseEfect,
  HookCustom,
  HookUseNavigate,
  HookUseLocation,
  HookUseRef,
  Forms,
  BasicForm,
  FormUseActionData,
  FormFormik,
  ReactHookForm,
  ReactFinalForm,
  Utils,
  UtilsDaysJS,
  MomentJS,
  UtilsSpinner,
  UtilsSwipeable,
  UtilsWebcam,
  UtilsCharts,
  UtilsMaps,
  UtilsClassicMaps,
  UtilsModal,
  UtilsCarousel,
  Material,
  MaterialButton,
  MaterialList,
  MaterialDrawer,
  MaterialTables,
  MaterialAccordion,
  MaterialStepper,
  MaterialTabs,
  MaterialDialog,
  MaterialCard,
  MaterialAutocomplete,
  MaterialDatePicker,
  Storage,
  LocalStorage,
  SessionStorage,
  ContextExample,
} from "./pages";
import { FrontLayout, RoutesQueryString } from "./components";
import HookUseLoaderData, {
  loader as paisesLoader,
} from "./pages/hooks/HookUseLoaderData";
import { action as processForm } from "./pages/forms/formActions";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <FrontLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/routes",
          element: <NewRoutes />,
        },
        {
          path: "/routes/path/:var1/:var2",
          element: <PathRoutes />,
        },
        {
          path: "/routes/query-string",
          element: <RoutesQueryString />,
          errorElement: <PersonalError />,
        },
        {
          path: "*",
          element: <Error404 />,
        },
        {/* Hooks */},
        {
          path: "/hooks",
          element: <Hooks />,
        },
        {
          path: "/hooks/evento/click",
          element: <HookClickEvent />,
        },
        {
          path: "/hooks/useState",
          element: <HookUseState />,
        },
        {
          path: "/hooks/onChage",
          element: <HookOnChange />,
        },
        {
          path: "/hooks/variousEvents",
          element: <HookVariousEvents />,
        },
        {
          path: "/hooks/useEfect",
          element: <HookUseEfect />,
        },
        {
          path: "/hooks/customeHooks",
          element: <HookCustom />,
        },
        {
          path: "/hooks/useLoaderData",
          element: <HookUseLoaderData />,
          loader: paisesLoader,
        },
        {
          path: "/hooks/useNavigate",
          element: <HookUseNavigate />,
        },
        {
          path: "/hooks/useLocation",
          element: <HookUseLocation />,
        },
        {
          path: "/hooks/useRef",
          element: <HookUseRef />,
        },
        {
          path: "/hooks/useContext",
          element: <ContextExample />,
        },
        {/* Forms */},
        {
          path: "/forms",
          element: <Forms />,
        },
        {
          path: "/forms/basicForm",
          element: <BasicForm />,
        },
        {
          path: "/forms/useActionData",
          element: <FormUseActionData />,
          action: processForm,
        },
        {
          path: "/forms/Formik",
          element: <FormFormik />,
        },
        {
          path: "/forms/ReactHookForm",
          element: <ReactHookForm />,
        },
        {
          path: "/forms/ReactFinalForm",
          element: <ReactFinalForm />,
        },
        {/* Utils */},
        {
          path: "/utils",
          element: <Utils />,
        },
        {
          path: "/utils/UtilsDaysJS",
          element: <UtilsDaysJS />,
        },
        {
          path: "/utils/MomentJS",
          element: <MomentJS />,
        },
        {
          path: "/utils/UtilsSpinner",
          element: <UtilsSpinner />,
        },
        {
          path: "/utils/UtilsSwipeable",
          element: <UtilsSwipeable />,
        },
        {
          path: "/utils/UtilsWebcam",
          element: <UtilsWebcam />,
        },
        {
          path: "/utils/UtilsCharts",
          element: <UtilsCharts />,
        },
        {
          path: "utils/UtilsClassicMaps",
          element: <UtilsClassicMaps />,
        },
        {
          path: "/utils/UtilsMaps",
          element: <UtilsMaps />,
        },
        {
          path: "/utils/UtilsModal",
          element: <UtilsModal />,
        },
        {
          path: "/utils/UtilsCarousel",
          element: <UtilsCarousel />,
        },
        {/* Material */},
        {
          path: "/material",
          element: <Material />,
        },
        {
          path: "/material/MaterialButton",
          element: <MaterialButton />,
        },
        {
          path: "/material/MaterialList",
          element: <MaterialList />,
        },
        {
          path: "/material/MaterialDrawer",
          element: <MaterialDrawer />,
        },
        {
          path: "/material/MaterialTables",
          element: <MaterialTables />,
        },
        {
          path: "/material/MaterialAccordion",
          element: <MaterialAccordion />,
        },
        {
          path: "/material/MaterialStepper",
          element: <MaterialStepper />,
        },
        {
          path: "/material/MaterialTabs",
          element: <MaterialTabs/>,
        },
        {
          path: "/material/MaterialDialog",
          element: <MaterialDialog/>,
        },
        {
          path: "/material/MaterialCard",
          element: <MaterialCard/>,
        },
        {
          path: "/material/MaterialAutocomplete",
          element: <MaterialAutocomplete/>,
        },
        {
          path: "/material/MaterialDatePicker",
          element: <MaterialDatePicker/>,
        },
        {/* Material */},
        {
          path: "/storage",
          element: <Storage/>,
        },
        {
          path: "/storage/LocalStorage",
          element: <LocalStorage/>,
        },
        {
          path: "/storage/SessionStorage",
          element: <SessionStorage/>,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true, // Compatibilidad con v7 para rutas splat (*)
      v7_startTransition: true, // Usar React.startTransition() en v7
    },
  }
);

//Se creó la ruta con ReactDOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
