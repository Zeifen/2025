import {Link} from 'react-router-dom';
import {useState} from 'react';

const HookUseState = () => {
    
    const [ count, setCount ] = useState(0);

    const handleClickIncrement = () =>
        {
            setCount ( count + 1 );
        }

    const handleClickDecrement = () =>
        {
            setCount ( count - 1 );
        }
    
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/hooks">Hooks</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    useState
                </li>
            </ol>
        </nav>
        <hr />
        <h3>useState</h3>
        <button className="btn btn-info" onClick={handleClickIncrement}>
            <i className="fa-solid fa-arrow-up"></i> Incrementar
        </button>
        <button className="btn btn-warning ms-1" onClick={handleClickDecrement}>
        <i className="fa-solid fa-arrow-down"></i> Decrementar
        </button>
        { count == 0 ?  <p className="mt-1">Estas en ceros {count}</p> 
        : count < 0 ?  <p className="mt-1 text-danger">Tu contador está en negativos: {count} </p> 
        : <p className="mt-1">Contador: {count}</p> }
        
    </>
  )
}

export default HookUseState;