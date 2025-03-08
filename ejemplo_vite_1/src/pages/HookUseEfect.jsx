import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

const HookUseEfect = () => {
    
    const [ array, setArray] = useState([]);
    const [ mark, setMark ] = useState();
    console.log(array);

    const markChange = (number) => {
        setMark (number);
    }

    useEffect(()=>{
            setArray ([
                {
                    id: 1,
                    name: "Sebas",
                    mail: "er@mail.com"
                },
                {
                    id: 2,
                    name: "Julio",
                    mail: "erty@mail.com"
                },
            ]);
    }, [mark]);

  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/hooks">Hooks</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    useEffect
                </li>
            </ol>
        </nav>
        <hr />
        <h3>useEffect</h3>
        <button className='btn btn-warning mb-2' onClick={()=>markChange(1)}>Mostrar Arreglo</button>
        <button className='btn btn-warning mb-2 ms-1' onClick={()=>markChange(0)}>Quitar Arreglo</button>
        <ul>
              {mark == 1 && array.map((person)=>(
                <li key={person.id}>
                Tu eres: {person.name}. 
                Tu email es: {person.mail}
                </li>
              ))}
        </ul>
        
    </>
  )
}

export default HookUseEfect;