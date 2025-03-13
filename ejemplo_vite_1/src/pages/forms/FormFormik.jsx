import {Link} from 'react-router-dom';
import {useFormik} from 'formik'; //https://formik.org/docs/overview
import { alertFunction } from './alertFunction';
import { formConstants } from "../../text";

//Usando Formulario Formik
const FormFormik = () => {

    const {handleSubmit, handleChange, values} = useFormik({
        initialValues:{
            mail: "",
            pass:""
        },
        onSubmit: async function (values) {
            const validate = formConstants.validate;
            if (values.mail === validate && values.pass === validate){
                alertFunction( formConstants.text, formConstants.icon, formConstants.titleAtention );
            } else if ((values.mail === validate && values.pass != validate) || (values.pass === validate && values.mail != validate) ) {
                alertFunction( formConstants.textMissing, formConstants.icon, formConstants.titleMissing );
            } else {
                const textLoggin = `E-Mail: ${values.mail} | Contraseña: ${values.pass}`;
                alertFunction( textLoggin, formConstants.iconSuccess, formConstants.titleOk );
            }
        }
    });

  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/forms">Formularios</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Formulario con Formik
                </li>
            </ol>
        </nav>
        <hr />
        <h3>Formik</h3>
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor="mail">E-Mail</label>
                <input type="text" id='mail' name='mail' className='form-control' onChange={handleChange} value={values.mail}/>
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" id='pass' name='pass' className='form-control' onChange={handleChange} value={values.pass}/>
            </div>
            <div className="form-control">
                <button className='btn btn-info' type='submit'>Enviar <i className="fa-solid fa-paper-plane"></i></button>
            </div>
        </form>
    </>
  )
}

export default FormFormik;