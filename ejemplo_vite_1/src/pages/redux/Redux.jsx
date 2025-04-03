import {Link} from 'react-router-dom';

const Redux = () => {
  return (
    <>
        <h1>Hooks</h1>
        <ul>
            <li>
                <Link to="/redux/ReduxButtons">Slice de botones</Link>
            </li>
            <li>
                <Link to="/redux/ReduxCalculator">Slice de calculadora</Link>
            </li>
            <li>
                <Link to="/redux/ReduxParameters">Slice de parámetros JSON</Link>
            </li>
        </ul>
    </>
  )
}

export default Redux;