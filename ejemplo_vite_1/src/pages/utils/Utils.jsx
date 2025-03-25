import {Link} from 'react-router-dom';

const Utils = () => {
  return (
    <>
        <h1>Utilidades</h1>
        <ul>
            <li>
                <Link to="/utils/UtilsDaysJS">UtilsDaysJS</Link>
            </li>
            <li>
                <Link to="/utils/MomentJS">Moment JS</Link>
            </li>
            <li>
                <Link to="/utils/UtilsSpinner">Spinner</Link>
            </li>
            <li>
                <Link to="/utils/UtilsSwipeable">React Swipeable</Link>
            </li>
            <li>
                <Link to="/utils/UtilsWebcam">React Webcam</Link>
            </li>
            <li>
                <Link to="/utils/UtilsCharts">React Charts</Link>
            </li>
            <li>
                <Link to="/utils/UtilsClassicMaps">Mapa clásico</Link>
            </li>
            <li>
                <Link to="/utils/UtilsMaps">Mapbox</Link>
            </li>
            <li>
                <Link to="/utils/UtilsModal">Modal</Link>
            </li>
            <li>
                <Link to="/utils/UtilsCarousel">Carrusel</Link>
            </li>
        </ul>
    </>
  )
}

export default Utils;