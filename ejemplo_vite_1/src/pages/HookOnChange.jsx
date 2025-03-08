import {Link} from 'react-router-dom';
import {useState} from 'react';

const HookOnChange = () => {
    const [ name, setName ] = useState('');
    const handleValue = () => {
        alert("Se ha enviado el nombre: " +name);
    }
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/hooks">Hooks</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    onChange
                </li>
            </ol>
        </nav>
        <hr />
        <h3>onChange</h3>
        <p>
            <input type="text" className="form-control" placeholder="nombre" value={name} onChange={(e) => {setName(e.target.value)}}/>
        </p>
        <button className='btn btn-info mb-2' onClick={handleValue}><i className="fa-solid fa-paper-plane"></i> Enviar</button>

    </>
  )
}

export default HookOnChange;