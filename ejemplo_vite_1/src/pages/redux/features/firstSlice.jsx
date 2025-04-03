import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    country: 'Mexico',
    city: 'CDMX'
};

export const firstSlice = createSlice({
    name: "first", //El reducer se deberá importar en el store como firstReducer (el name + Reducer)
    initialState,
    reducers:{
        changeChile: (state) =>{
            state.country = "Chile",
            state.city = "Viña del Mar"
        },
        changePeru: (state) =>{
            state.country = "Perú",
            state.city = "Lima"
        },
        backMexico: (state) =>{
            state.country = "Mexico",
            state.city = "CDMX"
        },
    }
});

export const { changeChile, changePeru, backMexico } = firstSlice.actions;
export default firstSlice.reducer;