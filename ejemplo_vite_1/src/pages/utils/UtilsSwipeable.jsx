import {Link} from 'react-router-dom';
import { LeadingActions,SwipeableList,SwipeableListItem,SwipeAction,TrailingActions } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css'; //https://www.npmjs.com/package/react-swipeable-list

const UtilsSwipeable = () => {

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={()=>{console.info("prueba LeadingActions")}} >
                <div className="alert alert-warning">Aceptar</div>
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={()=>{console.info("prueba TrailingActions")}} destructive={true}>
                <div className="alert alert-danger">Eliminar</div>
            </SwipeAction>
        </TrailingActions>
    )

  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/utils">Utilidades</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                React Swipeable
                </li>
            </ol>
        </nav>
        <hr />
        <h1>React Swipeable</h1>
        <hr />
        <SwipeableList>
            <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
                <div className="alert alert-success">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quasi soluta eos quos
                </div>
            </SwipeableListItem>
        </SwipeableList>
        </>
  )
}

export default UtilsSwipeable