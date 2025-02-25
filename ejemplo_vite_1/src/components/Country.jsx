const Country = ({countryProp}) => {
  return (
    <>
      <tr key={countryProp.id}>
        <td>{countryProp.id}</td>
        <td>{countryProp.nombre}</td>
        <td>{countryProp.dominio}</td>
      </tr>
    </>
  );
};

export default Country;
