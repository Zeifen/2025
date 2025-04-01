import Breadcrumb from "../../components/Breadcrumb";
import { hookConstants } from "../../text";
import { useContext } from "react"; //importación del hook useContext
import createContextExample from "../../context/contextExample"; //importación de variable a usar

const ContextExample = () => {

    const { contextVariable, salute, contextUseState, setContextUseState } = useContext(createContextExample); //Destructurando variable del provider
    const handleChange = () => {
        setContextUseState("Se cambió el valor desde otro componente");
    }

  return (
    <>
        <Breadcrumb link={hookConstants.hookLink} title={hookConstants.hookTitle} description={hookConstants.hookContextDesc}/>
        <p>Valor del context: {contextVariable}</p>
        <p>{salute("Sebas")}</p>
        <hr />
        <button className="btn btn-warning mb-2" onClick={handleChange}>Cambiar valor del estado de useContext</button>
        <p>{contextUseState}</p>
    </>
  )
}

export default ContextExample;