import {Link} from 'react-router-dom';

const Material = () => {
  return (
    <>
        <h1>Material</h1>
        <ul>
            <li>
                <Link to="/material/MaterialButton">Material botones, iconos y stack</Link>
            </li>
            <li>
                <Link to="/material/MaterialList">Material List</Link>
            </li>
            <li>
                <Link to="/material/MaterialDrawer">Material Drawer</Link>
            </li>
            <li>
                <Link to="/material/MaterialTables">Material Tables - Data Grid</Link>
            </li>
            <li>
                <Link to="/material/MaterialAccordion">Material Accordion</Link>
            </li>
            <li>
                <Link to="/material/MaterialStepper">Material Stepper</Link>
            </li>
            <li>
                <Link to="/material/MaterialTabs">Material Tabs</Link>
            </li>
            <li>
                <Link to="/material/MaterialDialog">Material Dialog</Link>
            </li>
            <li>
                <Link to="/material/MaterialCard">Material Card</Link>
            </li>
            <li>
                <Link to="/material/MaterialAutocomplete">Material Autocomplete</Link>
            </li>
            <li>
                <Link to="/material/MaterialDatePicker">Material Date Picker</Link>
            </li>
        </ul>
    </>
  )
}

export default Material;