import {Link} from 'react-router-dom';
import { useRef, useState } from 'react';

const HookUseRef = () => {
    const [text,setText] = useState('');
    const inputRef = useRef();
    const colorRef = useRef(null);

    const hadleTake = () => {
        setText(inputRef.current.value);
    }
    const cambiaColor = () => {
        colorRef.current.className='clase_azul';
    }

  return (
    <>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/hooks">Hooks</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
            HookUseRef
            </li>
        </ol>
    </nav>
    <hr />
    <h3>useRef</h3>
    <input type="text" className='form-control' ref={inputRef}/>
    <hr />
    <button className='btn btn-success' onClick={hadleTake}>Mostrar</button>
    <hr />
    <div className='clase_cafe' ref={colorRef} id='color_ref'>
        {text}
    </div>
    <button className='btn btn-success mt-2' onClick={cambiaColor}>Cambiar color</button>

    </>
  )
}

export default HookUseRef;