import React from 'react'
import Country from './Country';

const FunctionalComponent2 = ({prop1, prop2, prop3}) => {
  return (
    <>
    <h1>Hola desde componente funcional 2</h1>
    <h3>Prop 1 es: {prop1}</h3>
    <h3>Prop 2 es: {prop2}</h3>
    <h3>Prop 3 es un arreglo de objetos: </h3>
    <ul>
      {prop3.map((pais, i)=>(
        <li key={pais.id}>Indice : {i}. País :{pais.nombre}. El dominio es : {pais.dominio}.
        </li>
        ))}
    </ul>
    <hr />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Dominio</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {prop3.map((pais) => (
          <Country key={pais.id} countryProp={pais}/>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default FunctionalComponent2;