import Breadcrumb from "../../components/Breadcrumb";
import { reduxConstants } from "../../text";
import { useEffect, useState } from "react"; // Para el dispatch
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from './features/parametersSlice';

const ReduxParameters = () => {

  //API de .env
  const url = import.meta.env.VITE_LOCAL_API_UL;

  const parameters = useSelector((state)=>state.parameters);
  const dispatch = useDispatch();
  // useState para guardar el mensaje
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMensaje(data.mensaje);
      });
  }, []);

  return (
    <>
        <Breadcrumb link={reduxConstants.reduxLink} title={reduxConstants.reduxTitle} description={reduxConstants.reduxParameterDesc}/>
        <ul>
          <li>{mensaje}</li>
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