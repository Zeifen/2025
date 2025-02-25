import React from "react";

//Componente de clase (componente clásico o viejo)

export default class ClassComponentTemp extends React.Component {
    constructor(props){
        console.log("El componente aún no está montado");
        super();
        let contador = 0; //forma tradicional, esto no lo vamos a usar por el momento
        this.state = {
            contador: 0 //forma de declarar variable de estado
        }
    }
    //Componente de React.Component, especie de contructor pero que no se ejecuta
    //en el mismo momento del constructor
    componentDidMount(){ 
        console.log("El componente ya se encuentra en el DOM");
        /*setInterval(() => {
            
        }, 2000)*/
        this.setState(
            {
                contador: this.state.contador + 1 
            }
        );
        
    }
    componentDidUpdate(){ 
        console.log("El estado o las props del componente han cambiado");
    }
    render(){
        return(
            <>
            <h1>Hola desde componente de clase</h1>
            <p>Contador es igual a {this.state.contador}</p>
            </>
        )
    }
}