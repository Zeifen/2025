import {Link, useNavigate} from 'react-router-dom';

const HookUseNavigate = () => {
    const navitage = useNavigate();
  return (
    <>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/hooks">Hooks</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
            HookUseNavigate
            </li>
        </ol>
    </nav>
    <hr />
    <h3>HookUseNavigate</h3>
    <button className='btn btn-success me-2' onClick={() => {navitage("/about")} }> Ir "Acerca de nosotros..."</button>
    <button className='btn btn-success' onClick={() => {navitage(-1)} }> Regresar</button>
    </>
  )
}

export default HookUseNavigate;