import Breadcrumb from "../../components/Breadcrumb";
import { reduxConstants } from "../../text";
import { useEffect } from "react"; // Para el dispatch
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from './features/parametersSlice';


const ReduxParameters = () => {

  const parameters = useSelector((state)=>state.parameters);
  const dispatch = useDispatch();

  /*useEffect(() => {
    dispatch(changeParameter()); // Se ejecuta solo al montar el componente
  }, [dispatch]); 
  */
    //En este ejercicio se paso un JSON de manera directa pero si 
    //se requiere hacer una petición entonces esa petición sería con el useEffect

  return (
    <>
        <Breadcrumb link={reduxConstants.reduxLink} title={reduxConstants.reduxTitle} description={reduxConstants.reduxParameterDesc}/>
        <ul>
          <li>{parameters.nombre}</li>
          <li>{parameters.perfil_id}</li>
          <li>{parameters.perfil}</li>
        </ul>
        <hr />
        <button className='btn btn-warning me-2' 
        onClick={()=>{dispatch(logIn({ nombre: "Sebastian", perfil_id:1, perfil: "Administrador"}))}}>Iniciar sesión
        </button>
        
    </>
  )
}

export default ReduxParameters;