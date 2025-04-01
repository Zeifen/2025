import {Link} from 'react-router-dom';

const Storage = () => {
  return (
    <>
        <h1>Almacenamiento</h1>
        <ul>
            <li>
                <Link to="/storage/LocalStorage">Local Storage</Link>
            </li>
            <li>
                <Link to="/storage/SessionStorage">Session Storage</Link>
            </li>
        </ul>
    </>
  )
}

export default Storage;