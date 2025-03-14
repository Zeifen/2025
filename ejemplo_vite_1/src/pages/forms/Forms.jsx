import {Link} from 'react-router-dom';

const Forms = () => {
  return (
    <>
        <h1>Formularios</h1>
        <ul>
            <li>
                <Link to="/forms/basicForm">Formulario básico</Link>
            </li>
            <li>
                <Link to="/forms/useActionData">Formulario con useActionData</Link>
            </li>
            <li>
                <Link to="/forms/Formik">Formulario con Formik</Link>
            </li>
            <li>
                <Link to="/forms/ReactHookForm">Formulario con React Hook Form</Link>
            </li>
            <li>
                <Link to="/forms/ReactFinalForm">Formulario con React Final Form</Link>
            </li>
        </ul>
    </>
  )
}

export default Forms;