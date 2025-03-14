import {Link} from 'react-router-dom';
import { formConstants } from "../../text"; 
import Swal from 'sweetalert2';

const ReactFinalForm = () => {
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/forms">Formularios</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Formulario con React Hook Form
                </li>
            </ol>
        </nav>
        <hr />
        <h3>React Hook Form</h3>
        <form >
            <div className='form-control'>
                <label htmlFor="mail">E-Mail</label>
                <input type="text" id='mail' name='mail' className='form-control'/>
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' className='form-control'/>
            </div>
            <div className="form-control">
                <button className='btn btn-info' type='submit'>Enviar <i className="fa-solid fa-paper-plane"></i></button>
            </div>
        </form>
    </>
  )
}

export default ReactFinalForm;