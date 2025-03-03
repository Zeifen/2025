import {NavLink, Link} from 'react-router-dom';

const NewRoutes = () => {
    let var1 = 12;
    let var2 = "ejemplo";
  return (
    <>
        <h1>Rutas</h1>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <Link to="/about">Sobre nosotros...</Link>
            </li>
            <li>
                <Link to="/routes/path/1/ejemploDos">Path Routes</Link>
            </li>
            <li>
                <Link to={`/routes/path/${var1}/${var2}`}>Path Routes con useParams</Link>
            </li>
            <li>
                <Link to={`/routes/query-string?var1=${var1}&var2=${var2}`}>Query String Params</Link>
            </li>
        </ul>
    </>
  )
}

export default NewRoutes;
