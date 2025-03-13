import { useState } from 'react';
import {Link, Form, useActionData} from 'react-router-dom';
import { atributes, category_products } from '../../data/data';
import Validate from '../../components/Validate';
import Swal from 'sweetalert2';

const FormUseActionData = () => {
    //useState de asíncronia
    const [ name, setName ] = useState('');
    async function handleBlur(name) {
        if (name == "Sebas"){
            Swal.fire({
                title: 'Oppsssss!',
                text: `El nombre ingresado no es valido`,
                icon: 'error',
                });
            setName('');
        }
    }


    //Establece true o null en caso de ser peligroso
    const [ danger, setDanger ] = useState(false);
    const handleDanger = () => {
        setDanger(!danger);
    }

    //useActionData
    const errors = useActionData();

  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/forms">Formularios</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Formulario con useActionData
                </li>
            </ol>
        </nav>
        <hr />
        <h3>useActionData</h3>
        {errors?.length && <Validate errors={errors} />}
        <Form method ='POST' noValidate>
        <div>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id='nombre' className="form-control" name='nombre' 
            value={name} onChange={(e) => {setName(e.target.value)}} onBlur={(e) => {handleBlur(e.target.value)}}/>
            <label htmlFor="nombre">Apellido</label>
            <input type="text" id='apellido' className="form-control" name='apellido' />
            {/*Select*/}
            <label htmlFor="category" className='mb-2'>Categorías</label>
            <div className='form-group'>
                <select  id="category" className='form-control' name="opcion">
                    <option value="0" >Selecciona</option>
                    {category_products.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                    ))}
                </select>
            </div>
            {/*Input number*/}
            <div className='form-group mb-3'>
                <label htmlFor="nombre">Precio</label>
                <input type="number" id='precio' min="0" className="form-control" name='precio' placeholder='Precio' />
            </div>
            {/*Radio button*/}
            <div className="form-control">
                    <label htmlFor="destacado"><strong>Destacado</strong></label>
                    <div className="form-check">
                        <input type="radio" name='destacado' id="destacado1" value="si" className="form check-input" />
                        <label htmlFor="destacado1"> Si <i className="fa-solid fa-thumbs-up"></i></label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name='destacado' id="destacado2" value="no" className="form check-input" />
                        <label htmlFor="destacado2"> No <i className="fa-solid fa-thumbs-down"></i></label>
                    </div>
            </div>
            {/*Textarea*/}
            <div className='form-group'>
                <label htmlFor="nombre">Descripción</label>
                <textarea type="tnumber" id='descripcion' className="form-control" name='descripcion' placeholder='Descripción'></textarea>
            </div>
            {/*Check box*/}
            <div className='form-group mb-3 mt-3'> 
            <label htmlFor="peligroso">Selecciona alguna opción:</label>
                <div className='form-check mt-2'>
                    <label htmlFor="peligroso">Peligroso</label>
                    <input type="checkbox" id='peligroso' min="0" className="form-check-input" name='peligroso' value={danger} onChange={handleDanger}/>
                </div>
            </div>
            {/*Check box dinámico*/}
            <div className='form-group'>
                <label htmlFor="atributes"><strong>Atributos</strong></label>
                {atributes.map((atribute) => (
                    <div key={atribute.id} className="form-check">
                    <input type="checkbox" className="form-check-input" name={`atribute_${atribute.id}`} id={`atribute_${atribute.id}`} value={atribute.id}/>
                    <label htmlFor="">{atribute.nombre}</label>
                </div>
                ))}
            </div>
        </div>
            <button className='btn btn-info mt-2 mb-2' ><i className="fa-solid fa-paper-plane"></i> Enviar</button>
        </Form>
    </>
  )
}

export default FormUseActionData;