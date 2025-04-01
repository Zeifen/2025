import createContextExample from "./contextExample";
import { useState } from "react";

const ProviderExample = ({children}) => { 

    const contextVariable = "Hola desde un string estático del context";
    const salute = (name) => {
        return (
            <>Hola {name}, este mensaje es desde una funcion. </>
        )
    }
    const [ contextUseState, setContextUseState] = useState("Valor predefinido desde Provider");
    return (
        <createContextExample.Provider value={{contextVariable, salute, contextUseState, setContextUseState}}>
            {children}
        </createContextExample.Provider>
    )
}


export { ProviderExample }; 