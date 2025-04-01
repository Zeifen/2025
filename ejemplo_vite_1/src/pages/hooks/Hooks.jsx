import {Link} from 'react-router-dom';

const Hooks = () => {
  return (
    <>
        <h1>Hooks</h1>
        <ul>
            <li>
                <Link to="/hooks/evento/click">Evento Click</Link>
            </li>
            <li>
                <Link to="/hooks/useState">Evento useState</Link>
            </li>
            <li>
                <Link to="/hooks/onChage">Evento onChange</Link>
            </li>
            <li>
                <Link to="/hooks/variousEvents">Varios eventos</Link>
            </li>
            <li>
                <Link to="/hooks/useEfect">Evento useEffect</Link>
            </li>
            <li>
                <Link to="/hooks/customeHooks">Custome Hooks</Link>
            </li>
            <li>
                <Link to="/hooks/useLoaderData">Evento useLoaderData</Link> 
            </li>
            <li>
                <Link to="/hooks/useNavigate">Evento useNavigate</Link>
            </li>
            <li>
                <Link to="/hooks/useLocation">Evento useLocation</Link>
            </li>
            <li>
                <Link to="/hooks/useRef">Evento useRef</Link>
            </li>
            <li>
                <Link to="/hooks/useContext">Evento Context</Link>
            </li>
        </ul>
    </>
  )
}

export default Hooks