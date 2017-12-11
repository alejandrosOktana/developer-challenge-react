import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Chart from './containers/Chart/Chart.js';
import DataTable from './components/DataTable/DataTable.js';
import Slider from './containers/Slider/Slider';

const App = (props) => {
    return (
        <div>
            <div className='navbar navbar-default'>
                <a className='navbar-brand'>My Portfolio</a>
            </div>
            <div className='col-md-12'>
                <Chart/>
                <div className='detail col-md-6'>
                    <Slider/>
                    <DataTable/>
                </div>
            </div>
        </div>
    )
}

export default App;
