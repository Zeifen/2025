import {Link, useLoaderData} from 'react-router-dom';
import { countrys } from '../data/data';

export function loader () {
    const paises = [...countrys].sort((a, b) => b.name.localeCompare(a.name)); 
    return paises;
}

const HookUseLoaderData = () => {
    const paises = useLoaderData();
    console.log(paises);
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/hooks">Hooks</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    useLoaderData
                </li>
            </ol>
        </nav>
        <hr />
        <h3>useLoaderData</h3>
        <ul>
              {paises.map((p)=>(
                <li key={p.id}>
                País: {p.name}. 
                ID: {p.id}
                </li>
              ))}
        </ul>
    </>
  )
}

export default HookUseLoaderData;