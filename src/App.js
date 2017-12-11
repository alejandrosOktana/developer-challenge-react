import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Chart from './components/Chart/Chart.js';
import DataTable from './components/DataTable/DataTable.js';
import Slider from './components/Slider/Slider';
import Data from './data'

const INITIAL_RISK_LEVEL = 1;

class App extends Component {
  state = {
    data: Data,
    currentRiskLevel: INITIAL_RISK_LEVEL,
    selectedEntry: undefined
  };

  setRiskLevel = (event) => {
    this.setState({currentRiskLevel: event.target.value})
  }

  selectSlice = (selectedChartElements) => {
    if (selectedChartElements[0] !== undefined) 
      this.setState({selectedEntry: selectedChartElements[0]._index})
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-default">
          <a className="navbar-brand">My Portfolio</a>
        </div>

        <div className="containerc col-md-12">
          <Chart
            className="col-md-4 col-md-offset-1"
            data={this.state.data}
            currentRiskLevel={this.state.currentRiskLevel}
            selectSlice={this.selectSlice.bind(this)}/>

          <div className="detail col-md-6">
            <Slider
              currentRiskLevel={this.state.currentRiskLevel}
              setRiskLevel={this.setRiskLevel.bind(this)}/>
            <DataTable
              data={this.state.data}
              currentRiskLevel={this.state.currentRiskLevel}
              selectedEntry={this.state.selectedEntry}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
