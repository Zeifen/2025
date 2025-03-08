import {Link} from 'react-router-dom';
import {useState} from 'react';

const HookVariousEvents = () => {
    const In = () => {
        console.log("Se movió");
    }

    const Out = () => {
        console.log("Se salió");
    }

  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/hooks">Hooks</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    varios eventos
                </li>
            </ol>
        </nav>
        <hr />
        <h3>onMouseMove y onMouseOut</h3>
        <img  src="/calavera.png" style={{ width: "200px", height: "200px" }} onMouseMove={In} onMouseOut={Out}/>
    </>
  )
}

export default HookVariousEvents;