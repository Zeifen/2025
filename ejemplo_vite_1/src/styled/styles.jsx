import styled from "@emotion/styled"; //Importación de styled

// StyleDiv será un div y se le darán siguientes estilos dentro de las comillas,
// en color, recibe un prop que en caso de estar vacío le deja el color blanco
export const StyleDiv = styled.div` 
  padding: 0.5rem;
  margin: 0.5rem;
  background: gray;
  border: none;
  border-radius: 3px;
  color:${props => props.custom_color || "white"}
`

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  color: red;
`;

export const Circle = styled.div`
  background-color: red;
  color: #fff;
  text-align: center;
  padding: 80px 0px 10px 0px;
  width: 200px;
  height: 200px;
  border: 5px solid blue;
  border-radius: 50%;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  color:${props => props.custom_color || "green"}
`