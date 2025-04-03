import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nombre: "",
    perfil_id: 3, //Recomendado tener un valor por defecto que no tenga acceso a nada
    perfil:""
};

export const parametersSlice = createSlice({
    name:"parameters", //parametersReducer
    initialState,
    reducers:{
        logIn: (state, data) => {
            state.nombre = data.payload.nombre,
            state.perfil_id = data.payload.perfil_id,
            state.perfil = data.payload.perfil
        },
    }
});

export const { logIn } = parametersSlice.actions;
export default parametersSlice.reducer;