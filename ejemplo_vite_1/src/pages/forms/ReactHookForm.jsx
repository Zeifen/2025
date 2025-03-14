import {Link} from 'react-router-dom';
import { formConstants } from "../../text";
import {useForm} from 'react-hook-form'; 
import Swal from 'sweetalert2';

const ReactHookForm = () => {

    const {register, formState:{errors}, handleSubmit} = useForm();
    function onSubmit (values) {
        Swal.fire({
                icon: 'success',
                title: 'Bienvenido',
                text: `Correo: ${values.mail} y contraseña: ${values.password}`
            });
    }

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
        {(errors.mail || errors.password) && (
            <div className='alert alert-danger'>
                <ul>
                    {errors.mail && <li>{errors.mail?.message}</li>}
                    {errors.password && <li>{errors.password?.message}</li>}
                </ul>
            </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control'>
                <label htmlFor="mail">E-Mail</label>
                <input type="text" id='mail' name='mail' className='form-control' {...register("mail", {
                    required: "El campo es obligatorio"
                })} />
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' className='form-control'  {...register("password", {
                    required: "Contraseña obligatoria"
                })} />
            </div>
            <div className="form-control">
                <button className='btn btn-info' type='submit'>Enviar <i className="fa-solid fa-paper-plane"></i></button>
            </div>
        </form>
    </>
  )
}

export default ReactHookForm;