import {Link} from 'react-router-dom';
//import Map from 'react-map-gl';

const UtilsMaps = () => {
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/utils">Utilidades</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                Mapbox
                </li>
            </ol>
        </nav>
        <hr />
        <h1>Mapbox</h1>
        <hr />
        {/* 
        <Map
            mapboxAccessToken="weoweoweo"
            initialViewState = {{
                longitude: -70.6097749,
                latitude: -33.53123774,
                zoom: 14,
                //itch: 60,
                //bearing: -60,
                attributionControl: false
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            style={{ width: 640, height: 450 }}
        />
        
        
        */}

        
    </>
  )
}

export default UtilsMaps;