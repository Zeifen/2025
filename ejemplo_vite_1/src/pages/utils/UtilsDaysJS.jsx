import {Link} from 'react-router-dom';
import dayjs from 'dayjs'; //https://www.npmjs.com/package/dayjs
import 'dayjs/locale/es';

const UtilsDaysJS = () => {

    let dates = new Date();
    dayjs.locale('es');

  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/utils">Utilidades</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    UtilsDaysJS
                </li>
            </ol>
        </nav>
        <hr />
        <h1>UtilsDaysJS</h1>
        <hr />
        <h3>Formatear fecha</h3>
        <ul>
            <li>Fecha sin formateo: {dates.toString()}</li>
            <li>Fecha con TimeStamp: {dates.valueOf()}</li> {/* Sirve para hacer calculos con fechas, rangos, etc */}
            <li>Fecha DayJS general: {dayjs(dates).format('DD/MM/YYYY')}</li>
            <li>Fecha DayJS del día: {dayjs(dates).format('dddd').replace(/\b[a-z]/g, c => c.toUpperCase())} {dayjs(dates).format('DD')} de {dayjs(dates).format('MMMM')} del {dayjs(dates).format('YYYY')} a las {dayjs(dates).format('HH:mm:ss')}</li>
        </ul>
        <h3>Cálculos con fechas</h3>
        <ul>
        <li>Fecha DayJS + 7 días: {dayjs(dates).add(7,'day').format('DD/MM/YYYY')}</li>
        <li>Fecha DayJS - 7 días: {dayjs(dates).subtract(7,'day').format('DD/MM/YYYY')}</li>
        <li>Fecha DayJS + 7 meses: {dayjs(dates).add(7,'dmonth').format('DD/MM/YYYY')}</li>
        <li>Fecha DayJS - 7 meses: {dayjs(dates).subtract(7,'month').format('DD/MM/YYYY')}</li>
        <li>Fecha DayJS + 7 años: {dayjs(dates).add(7,'year').format('DD/MM/YYYY')}</li>
        <li>Fecha DayJS - 7 años: {dayjs(dates).subtract(7,'year').format('DD/MM/YYYY')}</li>
        </ul>
        </>
  )
}

export default UtilsDaysJS;