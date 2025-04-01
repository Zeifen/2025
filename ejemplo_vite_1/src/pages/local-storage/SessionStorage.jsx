import Breadcrumb from "../../components/Breadcrumb";
import { storageConstants } from "../../text";
import { useState } from "react";
import Swal from 'sweetalert2';

const SessionStorage = () => {

    const [existe, setExiste] =useState( (sessionStorage.getItem('tokenLocal')!=null) ? 1:0);
        const handleCrear=()=>
        {
            sessionStorage.setItem('tokenLocal', '123456');
            Swal.fire({
                icon: 'success',
                title: 'Ok',
                text: `Se creó el registro exitosamente`
            }); 
            setExiste(1);
        }
        const handleBorrar=()=>
        {
            sessionStorage.removeItem("tokenLocal");
            //sessionStorage.removeAll();
            Swal.fire({
                icon: 'success',
                title: 'Ok',
                text: `Se eliminó el registro exitosamente`
            }); 
            setExiste(0);
        }

  return (
    <>
        <Breadcrumb link={storageConstants.storageLink} title={storageConstants.storageTitle} description={storageConstants.storageSessionDesc}/>
        <button className='btn btn-warning' onClick={handleCrear}>Crear sessionStorage</button>
          {existe==1 && (
            <>
            <p>El valor es: {sessionStorage.getItem('tokenLocal')}
            <br/><br/>
            <button className='btn btn-danger' onClick={handleBorrar}>Borrar</button>
            </p>
            </>
          )}
    </>
  );
};

export default SessionStorage;