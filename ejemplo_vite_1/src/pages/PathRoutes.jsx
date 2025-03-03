import {useParams} from 'react-router-dom';

const PathRoutes = () => {
    const {var1, var2} = useParams();
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

export default PathRoutes;