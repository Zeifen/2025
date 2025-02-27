import { StyleDiv, Title, Circle, Input } from "../styled/styles";

const StyleComponent = () => {
    let color ;
  return (
    <>
      <h1>Style Component</h1>
      <hr />
      <Title>Usando Style Component</Title>
      <hr />
      <Circle>Circulo</Circle>
      {color ? <Input type="text" id="example" placeholder="Sebas" custom_color={color}/> : <Input id="example" type="text" placeholder="Sebas" />}
      <hr />
      <StyleDiv>Hola usando Style Component desde otro archivo, osea se importó</StyleDiv>
    </>
  );
};

export default StyleComponent;
