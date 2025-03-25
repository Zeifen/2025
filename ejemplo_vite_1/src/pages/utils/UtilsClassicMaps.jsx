import {Link} from 'react-router-dom';

const UtilsClassicMaps = () => {
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/utils">Utilidades</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                Mapa clásico
                </li>
            </ol>
        </nav>
        <hr />
        <h1>Mapa clásico</h1>
        <hr />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7969.604877669885!2d-99.23918171971431!3d19.492067790370335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20358d76cf57b%3A0xa575585e2d3b7bd7!2sLa%20Comer%20Torres%20de%20Sat%C3%A9lite!5e0!3m2!1ses-419!2smx!4v1742843620241!5m2!1ses-419!2smx" 
        width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        
    </>
  )
}

export default UtilsClassicMaps;