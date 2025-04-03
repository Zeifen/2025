import { configureStore } from "@reduxjs/toolkit";
import firstReducer from '../features/firstSlice';
import calculatorReducer from '../features/calculatorSlice';
import parametersReducer from '../features/parametersSlice';

export const store = configureStore({
    reducer: {
        first: firstReducer,
        calculator: calculatorReducer,
        parameters: parametersReducer,
    }
});

