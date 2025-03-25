import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const UtilsModal = () => {

  const [ show, setShow ] = useState(false);
  const handleClose = () => {
    setShow(!show);
  }

  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/utils">Utilidades</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                Modal
                </li>
            </ol>
        </nav>
        <hr />
        <h1>Modal</h1>
        <hr />
        <Button variant='primary' onClick={handleClose}>Abrir</Button>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header>
            <Modal.Title>Título</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='card mb-3'>
              <div className='card-header text-white bg-primary'>
                <h1>Almacenamiento local</h1>
              </div>
              <div className='card-body'>
                <h3>Título</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore natus at atque assumenda incidunt cupiditate.</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-info' onClick={handleClose}>Cerrar</button>
            <Button variant='secondary' onClick={handleClose}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
    </>
  )
}

export default UtilsModal;