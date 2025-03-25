import {Link} from 'react-router-dom';
import '../../spinner.css'

const UtilsSpinner = () => {
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/utils">Utilidades</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Spinner
                </li>
            </ol>
        </nav>
        <hr />
        <h1>Spinner</h1>
        <hr />
        <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
        </div>
    </>
  )
}

export default UtilsSpinner;