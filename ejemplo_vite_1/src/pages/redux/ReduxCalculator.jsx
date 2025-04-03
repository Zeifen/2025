import Breadcrumb from "../../components/Breadcrumb";
import { reduxConstants } from "../../text";
import { useSelector, useDispatch } from 'react-redux';
import { sumar, restar, multiplicar, dividir, resetear } from './features/calculatorSlice';


const ReduxCalculator = () => {

  const calculator = useSelector((state)=>state.calculator);
  const dispatch = useDispatch();


  return (
    <>
      <Breadcrumb link={reduxConstants.reduxLink} title={reduxConstants.reduxTitle} description={reduxConstants.reduxCalculatorDesc}/>
      <p>Tu primer número es: {calculator.number_1}</p>
      <p>Tu segundo número es: {calculator.number_2}</p>
      {calculator.result === 0 ? <p>Realiza alguna acción</p> : <p>Tu resultado es: {calculator.result}</p> }
      { /*
      
      <p>{calculator.result}</p> */}
      <button className='btn btn-warning me-2' onClick={()=>dispatch(sumar())}>Sumar</button>
      <button className='btn btn-warning me-2' onClick={()=>dispatch(restar())}>Restar</button>
      <button className='btn btn-warning me-2' onClick={()=>dispatch(multiplicar())}>Multiplicar</button>
      <button className='btn btn-warning me-2' onClick={()=>dispatch(dividir())}>Dividir</button>
      <button className='btn btn-warning me-2' onClick={()=>dispatch(resetear())}>Resetear</button>
        
    </>
  )
}

export default ReduxCalculator;