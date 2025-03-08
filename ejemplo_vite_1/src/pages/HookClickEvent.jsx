import {Link} from 'react-router-dom';

const HookClickEvent = () => {
    
    const handleClick = () =>
    {
        alert("Ejemplo");
    }

    const handleClickDos = (nombre) =>
    {
        alert("Tu nombre es: " +nombre);
    }

  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/hooks">Hooks</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Evento Click
                </li>
            </ol>
        </nav>
        <hr />
        <h3>Click</h3>
        <button className="btn btn-primary" onClick={handleClick}>
            <i className="fa-solid fa-hand-point-up"></i> Click
        </button>
        <hr />
        <button className="btn btn-danger" onClick={()=>{handleClick()}}>
            <i className="fa-solid fa-hand-point-up"></i> Click con función flecha
        </button>
        <hr />
        <button className="btn btn-danger" onClick={()=>{handleClickDos("Sebas")}}>
            <i className="fa-solid fa-hand-point-up"></i> Click con parámetro
        </button>
    </>
  )
}

export default HookClickEvent