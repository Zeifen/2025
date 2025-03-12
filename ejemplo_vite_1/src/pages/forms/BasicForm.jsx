import { useState } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

const BasicForm = () => {
    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        Swal.fire({
            title: '¡Hola!',
            text: 'Tu nombre es: ' +name+ ' y tu apellido es: ' +secondName,
            icon: 'info',
            confirmButtonText: '¡Vale!'
          })
    }
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/forms">Formularios</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Formulario básico
                </li>
            </ol>
        </nav>
        <hr />
        <h3>Formulario básico</h3>
        <form onSubmit={handleSubmit}>
        <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id='nombre' className="form-control" value={name} onChange={(e) => {setName(e.target.value)}} />
                <label htmlFor="nombre">Apellido</label>
                <input type="text" id='nombre' className="form-control" value={secondName} onChange={(e) => {setSecondName(e.target.value)}} />
            </div>
            <button className='btn btn-info mt-2 mb-2' ><i className="fa-solid fa-paper-plane"></i> Enviar</button>
        </form>
    </>
  )
}

export default BasicForm;