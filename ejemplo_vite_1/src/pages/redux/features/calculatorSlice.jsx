import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    number_1:10,
    number_2:5,
    result: 0
};

export const calculatorSlice = createSlice({
    name:'calculator',
    initialState,
    reducers:{
        sumar: (state)=>
            {
              state.result = state.number_1 + state.number_2  
            },
            restar: (state)=>
            {
              state.result = state.number_1 - state.number_2
            },
            multiplicar: (state)=>
            {
              state.result = state.number_1 * state.number_2
            },
            dividir: (state)=>
            {
              if (state.number_1 !=0)
              {
                 state.result = state.number_1 / state.number_2
              } else
              {
                state.result=0;
              }
            },
            resetear: (state)=>
            {
              state.result = 0;  
            }
    }
});

export const { sumar, restar, multiplicar, dividir, resetear } = calculatorSlice.actions;
export default calculatorSlice.reducer;