import React from 'react';
import { formatearFecha, formatearNumero, acortarTexto } from "../helpers/helpers";

//Componente funcional

const Basic = () => {
    let fecha = new Date();
    let cantidad = 34343;
    let texto = 'Este es un texto de ejemplo para poder validar como se podría acortar el mismo';
  
    let edad = 18;
    let numero = 13;
    let paises = [
      {
        nombre: "México",
        dominio: "cl",
      },
      {
        nombre: "Chile",
        dominio: "cl",
      },
      {
        nombre: "Perú",
        dominio: "cl",
      },
    ]
  
    return (
      <>
        <h1>Renderizado condicional AND</h1>
        {edad >= 18 && <p>Eres adulto</p>}
        <hr />
        <h1>Renderizado condicional OR</h1>
        {edad > 19 || <p>18 no es mayor que 19</p>}
        <h1>Renderizado condicional</h1>
        {edad >= 18 ? <p>Eres mayor de edad</p> : <p>No eres mayor de edad</p>}
        <hr />
        {(() => {
          switch (numero) {
            case 13:
              return <>Número 13</>;
              break;
            default:
              return <div>Número ?</div>;
              break;
          }
        })()}
        <hr />
        <h1>Ejemplos de Loop</h1>
        <h3>Loop normal con ES6</h3>
          <ul>
            {[...Array(11)].map((x,i)=>(
              <li key={i}>{i}</li>
            ))}
          </ul>
  
        <h3>Loop inline IIFE</h3>
            <ul>
              {(function (rows, i,len) {
                while (++i <= len) {
                  rows.push(<li key={i}>{i}</li>)
                }
                return rows;
              })([],0,10)}
            </ul>
  
        <h3>Loop con ES2015 syntax y Array methods</h3>
            {Array(11).fill(1).map((el,i) =>
              <li key={i}>{i}</li>
              )}
  
        <h3>Ciclo sencillo</h3>
            {(() => {
              let rows = [];
              for (let i=1; i<=10; i++){
                rows.push(<li key={i}>{i}</li>);
              }
              return rows;
            })()}
            <hr />
            <h1>Recorriendo un Map</h1>
            <ul>
              {paises.map((pais, i)=>(
                <li key={pais.nombre}>{pais.nombre}. 
                El dominio es: {pais.dominio}. 
                Estás en el indice: {i}</li>
              ))}
            </ul>
            <hr />
            <h1>Helpers personalizados</h1>
            <ul>
              <li>Fecha: {formatearFecha(fecha)}</li>
              <li>Cantidad: {formatearNumero(cantidad)}</li>
              <li>Texto: {acortarTexto(texto, 0, 16)}</li>
            </ul>
      </>
    );
};

export default Basic;

