import { countries } from "../../data/data.jsx"; //Se pasó todos los datos al archivo data, eran muchísimos
import { matConstants } from "../../text";
import Breadcrumb from "../../components/Breadcrumb";
import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

const MaterialAutocomplete = () => {
  const [dato, setDato] = useState();
  const handleCampo = (e) => {
    //e es el evento, ya que es un formulario, entonces e.preventDefault(); previene lazy load
    e.preventDefault();
    alert(dato ? dato.label : 'Nada seleccionado');
  };
  return (
    <>
      <Breadcrumb link={matConstants.matLink} title={matConstants.matTitle} description={matConstants.matAutoDescription}/>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleCampo}
      >
        <Autocomplete
          //Declaración de onChange en un Autocomplete
          onChange={(event, newValue) => setDato(newValue)}
          id="country-select-demo"
          sx={{ width: 300 }}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => {
            // Extraer key antes de esparcir props, se realizo esto ya que 
            // en Material UI, props contiene una propiedad key, y React prohíbe pasar key directamente como prop en un JSX spread (como ...props).
            const { key, ...rest } = props; 
            return (
              <Box
                component="li"
                {...rest}
                key={key}
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a country"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // Desactivar autocompletado del navegador
              }}
              // Se deja comentario de que el onChange se encontraba aquí y se declara diferente, va en el componente <Autocomplete>
            />
          )}
        />
        <hr />
        <Button variant="contained" type="submit">
          Enviar
        </Button>
      </form>
    </>
  );
};

export default MaterialAutocomplete;
