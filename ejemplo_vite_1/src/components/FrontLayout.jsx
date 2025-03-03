import {Outlet} from 'react-router-dom';

const FrontLayout = () => {
  return (
    <>
    <h1>Título para todas las páginas</h1>
    <Outlet />
    </>
  )
}

export default FrontLayout;