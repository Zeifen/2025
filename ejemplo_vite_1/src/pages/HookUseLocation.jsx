import {Link, useLocation} from 'react-router-dom';

const HookUseLocation = () => {
    const location = useLocation();
    console.log(location);
    console.log(location.pathname);
  return (
    <>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/hooks">Hooks</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
            HookUseLocation
            </li>
        </ol>
    </nav>
    <hr />
    <h3>HookUseLocation</h3>
    <p>{location.pathname}</p>

    </>
  )
}

export default HookUseLocation;