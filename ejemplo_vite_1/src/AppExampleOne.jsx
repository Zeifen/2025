import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { generalConstants } from "./text/constants";
import Parser from 'html-react-parser';

function AppExampleOne() {

  const title = generalConstants.title_inter; // Ejemplo de título importandolo
  const ejemplo = '<h1>Título con interpolación</h1>'; // Ejemplo directo
  const ejemplo2 = '<h1 className="clase_azul">Título con html-react-parser</h1>'; // Ejemplo con html-react-parser

  return (
    <>
      <h1 className="clase_cafe">Hola mundo</h1>
      <div className="clase_azul" dangerouslySetInnerHTML={{__html: ejemplo}}></div> 
      <hr />
    { Parser(ejemplo2)} 
    </>
  );
}

export default AppExampleOne;
