import {useLocation} from 'react-router-dom';

const RoutesQueryString = () => {
    const search = useLocation().search;
    let var1 = new URLSearchParams(search).get("var1");
    const var2 = new URLSearchParams(search).get("var2");
  return (
    <>
    <h1>Ejemplos parámetros path</h1>
    <ul>
        <li>Primer parametro: {var1}</li>
        <li>Segundo parametro: {var2}</li>
    </ul>
   </>
  )
}

export default RoutesQueryString;