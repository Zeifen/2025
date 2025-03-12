import Swal from 'sweetalert2';
import { atributes } from '../../data/data';

export async function action({request}) {
    //Siempre los action deben de retornar algo
    const formData = await request.formData(); // modo actual: ${formData.get('uno')}
    const datos = Object.fromEntries(formData); // modo clásico: ${datos.uno}

    //Recibiendo checkbox dinámico
    let array = [];
    let messageArray = "";
    atributes.map((atribute, i) => {
        if(formData.get("atribute_"+atribute.id)!= null){
            array [i] = atribute.id ;
            messageArray = messageArray + atribute.nombre+ ", ";
        }
    });
    console.log(array);

    //Manejando errores de formulario
    let errors = [];
    if(formData.get('opcion')=='0'){
        errors.push('Debe seleccionar al menos una categoría');
    }
    if(Object.values(datos).includes('')){
        errors.push('Todos los campos son obligatorios');
    }
    let price_expresion = new RegExp("[0-9]");
    if(!price_expresion.test(formData.get('precio'))){
        errors.push('El precio sólo puede tener números');
    }    
    if(Object.keys(errors).length){
        return errors;
    }
    
    //Usando alertas de la paquetería Swal
    return Swal.fire({
                title: '¡Hola!',
                text: `Tu nombre es: ${formData.get('nombre')}. 
                tu apellido es ${formData.get('apellido')}| Nombre: ${datos.nombre}
                Tu seleccionaste: ${formData.get('opcion')}.
                Tu precio es de: ${formData.get('precio')}.
                Tu opción fue: ${formData.get('destacado')}.
                Tu descripción fue: ${formData.get('descripcion')}
                Es peligroso? ${formData.get('peligroso')}
                Atributos: ${messageArray}
                `
                ,
                icon: 'info',
                confirmButtonText: '¡Vale!'
              })
}