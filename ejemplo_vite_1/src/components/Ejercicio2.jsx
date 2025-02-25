import React from 'react';
import Ejercicio3 from './Ejercicio3';

const Ejercicio2 = ({propEx1, propEx2}) => {
  return (
    <div>
        <h3>{propEx1}</h3>
        <ul>
            {propEx2.map((persona,i) => (
            <Ejercicio3 key={i} propEje3={persona}/>
        ))}
        </ul>
    </div>
  )
}

export default Ejercicio2;