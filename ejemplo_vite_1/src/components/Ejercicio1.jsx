import React from 'react'
import Ejercicio2 from './Ejercicio2';

const Ejercicio1 = () => {
    let array = [
        {
            nombre: "Sebas",
            edad: 32,
            sexo: "M"
        },
        {
            nombre: "Pat",
            edad: 33,
            sexo: "F"
        },
        {
            nombre: "Carlos",
            edad: 35,
            sexo: "M"
        },
    ];
    let titulo = "Tu lista es la siguiente";
  return (
    <>
    <Ejercicio2 propEx1={titulo} propEx2={array}/>
    </>
  )
}

export default Ejercicio1