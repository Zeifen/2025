import {Link} from 'react-router-dom';
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; //https://www.npmjs.com/package/react-chartjs-2
import "../../index.css";

const UtilsCharts = () => {

    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: ['PHP', 'Python', 'Java', 'JS', 'C#', 'Golang'],
        datasets: [
        {
            label: 'Número de desarrolladores',
            data: [1200, 5501, 4300, 5231, 3214, 960],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
        ],
    };

  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/utils">Utilidades</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                React Charts
                </li>
            </ol>
        </nav>
        <hr />
        <h1>React Charts</h1>
        <hr />
        <div className='container chart_min'>
            <Pie data={data}></Pie>
        </div>
        
    </>
  )
}

export default UtilsCharts;