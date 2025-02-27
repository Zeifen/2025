import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';

const BasicRoutes = () => {
  return (
    <>
        <BrowserRouter> {/*Contenedor de las rutas */}
            <Routes>  {/*Inicializador de las rutas */}
                <Route path='/' element={<Home />} />  {/* 1er Ruta */}
                <Route path='/about' element={<About />} />  {/* 2da Ruta */}
                <Route path='*' element={<Error404 />} />  {/* 2da Ruta */}
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default BasicRoutes;