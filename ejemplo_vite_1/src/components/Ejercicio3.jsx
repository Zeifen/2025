import React from 'react'

const Ejercicio3 = ({propEje3}) => {
  return (
    <>
    <li key={propEje3.edad}>Edad: {propEje3.edad}. Nombre :{propEje3.nombre}. Sexo : {propEje3.sexo}.
    </li>
    </>
  )
}

export default Ejercicio3