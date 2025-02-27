import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Basic from "./components/Basic";
import ClassComponent from "./components/ClassComponentTemp";
import FunctionalComponent from "./components/FunctionalComponent.jsx";
import Ejercicio1 from "./components/Ejercicio1.jsx";
import StyleComponent from "./components/StyleComponent.jsx";

function AppCondition() {
  return (
    <>
      {/* <Basic/> */}
      <StyleComponent />
    </>
  );
}

export default AppCondition;
