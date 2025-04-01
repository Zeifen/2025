import Breadcrumb from "../../components/Breadcrumb";
import { storageConstants } from "../../text";
import { useState } from "react";
import Swal from 'sweetalert2';


const LocalStorage = () => {
    const [existe, setExiste] =useState( (localStorage.getItem('tokenLocal')!=null) ? 1:0);
    const handleCrear=()=>
    {
        localStorage.setItem('tokenLocal', '123456');
        Swal.fire({
            icon: 'success',
            title: 'Ok',
            text: `Se creó el registro exitosamente`
        }); 
        setExiste(1);
    }
    const handleBorrar=()=>
    {
        localStorage.removeItem("tokenLocal");
        //localStorage.removeAll();
        Swal.fire({
            icon: 'success',
            title: 'Ok',
            text: `Se eliminó el registro exitosamente`
        }); 
        setExiste(0);
    }
  return (
    <>
        <Breadcrumb link={storageConstants.storageLink} title={storageConstants.storageTitle} description={storageConstants.storageLocalDesc}/>
          <button className='btn btn-warning' onClick={handleCrear}>Crear localstorage</button>
          {existe==1 && (
            <>
            <p>El valor es: {localStorage.getItem('tokenLocal')}
            <br/><br/>
            <button className='btn btn-danger' onClick={handleBorrar}>Borrar</button>
            </p>
            </>
          )}
         
    </>
  )
}

export default LocalStorage;