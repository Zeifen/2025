import React from 'react'
import FunctionalComponent2 from './FunctionalComponent2';

const FunctionalComponent = () => {
  let nombre = "Sebastian R";
  let arr = [{
    id:1,
    nombre: "México",
    dominio: "mx"
  },
  {
    id:2,
    nombre:"Chile",
    dominio: "cl"
  }
]
  return (
    <>
    <h1>Hola desde componente funcional</h1>
    <FunctionalComponent2 prop1="manzana" prop2={nombre} prop3={arr}/>
    </>
  )
}

export default FunctionalComponent;