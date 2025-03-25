import {Link} from 'react-router-dom';
import moment from 'moment'; //https://momentjs.com/

const MomentJS = () => {

    let dates = new Date();
    moment.locale(); 

  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/utils">Utilidades</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Moment JS
                </li>
            </ol>
        </nav>
        <hr />
        <h1>Moment JS</h1>
        <hr />
        <h3>Formatear fecha</h3>
        <ul>
            <li>Fecha sin formateo: {dates.toString()}</li>
            <li>Fecha con TimeStamp: {dates.valueOf()}</li>
            <li>Fecha Moment general: {moment(dates).format('DD/MM/YYYY')}</li>
            <li>Fecha Moment del día: {moment(dates).format('dddd').replace(/\b[a-z]/g, c => c.toUpperCase())} {moment(dates).format('DD')} de {moment(dates).format('MMMM')} del {moment(dates).format('YYYY')} a las {moment(dates).format('HH:mm:ss')}</li>
        </ul>
        <h3>Cálculos con fechas</h3>
        <ul>
            <li>Fecha Moment + 7 días: {moment(dates).add(7,'day').format('DD/MM/YYYY')}</li>
            <li>Fecha moment - 7 días: {moment(dates).subtract(7,'day').format('DD/MM/YYYY')}</li>
            <li>Fecha Moment + 7 meses: {moment(dates).add(7,'dmonth').format('DD/MM/YYYY')}</li>
            <li>Fecha Moment - 7 meses: {moment(dates).subtract(7,'month').format('DD/MM/YYYY')}</li>
            <li>Fecha Moment + 7 años: {moment(dates).add(7,'year').format('DD/MM/YYYY')}</li>
            <li>Fecha Moment - 7 años: {moment(dates).subtract(7,'year').format('DD/MM/YYYY')}</li>
        </ul>
        </>
  )
}

export default MomentJS;