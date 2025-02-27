import React from 'react';
import FunctionalComponent2 from './FunctionalComponent2';
import ConditionalComponent from './ConditionalComponent';
import ChildrenComponent from './ChildrenComponent';

const FunctionalComponent = () => {
  let numero = 13;
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
    <hr />
    {numero == 13? <ConditionalComponent number={numero}/> : "No es 13"}
    <hr />
    <ChildrenComponent otro="Prop clásico">
      <p className="clase_cafe">Hola desde Children component</p>
    </ChildrenComponent>
    </>
  )
}

export default FunctionalComponent;