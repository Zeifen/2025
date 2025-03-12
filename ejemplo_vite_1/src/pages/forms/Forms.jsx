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
                <Link to="/forms/basicForm">Formulario</Link>
            </li>
            <li>
                <Link to="/forms/basicForm">Formulario</Link>
            </li>
        </ul>
    </>
  )
}

export default Forms;