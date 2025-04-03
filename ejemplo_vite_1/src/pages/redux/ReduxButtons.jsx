import Breadcrumb from "../../components/Breadcrumb";
import { reduxConstants } from "../../text";
import { useSelector, useDispatch } from 'react-redux';
import { changeChile, changePeru, backMexico } from './features/firstSlice';


const ReduxButtons = () => {

  const pais = useSelector((state)=>state.first);
  const dispatch = useDispatch();


  return (
    <>
        <Breadcrumb link={reduxConstants.reduxLink} title={reduxConstants.reduxTitle} description={reduxConstants.reduxButtonDesc}/>
        <ul>
          <li>Pais: {pais.country}</li>
          <li>Ciudad: {pais.city}</li>
        </ul>
        <hr />
        <button className='btn btn-warning me-2' onClick={()=>dispatch(changeChile())}>Cambiar a Chile</button>
        <button className='btn btn-warning me-2' onClick={()=>dispatch(changePeru())}>Cambiar a Perú</button>
        <button className='btn btn-warning me-2' onClick={()=>dispatch(backMexico())}>Regresar a México</button>
        
    </>
  )
}

export default ReduxButtons;