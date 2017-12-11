import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import { connect } from 'react-redux';
import { SELECT_SLICE } from '../../store/actions.js';

const PIE_DIMENSIONS = {
    WIDTH: 200,
    HEIGHT: 200
}
class Chart extends Component {

    chartOptions = {
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    let allData = data.datasets[tooltipItem.datasetIndex].data;
                    let tooltipLabel = data.labels[tooltipItem.index];
                    let tooltipData = allData[tooltipItem.index];
                    return tooltipLabel + ': ' + tooltipData + ' USD';
                }
            }
        }
    };

    render(){
        return (
            <div className='col-md-offset-1 col-md-4'>
                <Pie
                    data={this.props.data}
                    options={this.chartOptions}
                    width={PIE_DIMENSIONS.WIDTH}
                    height={PIE_DIMENSIONS.HEIGHT}
                    onElementsClick={this.props.selectSlice}/>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: {
            labels: state.labels,
            datasets: [
                {
                    data: state.dataValues,
                    backgroundColor: state.colors
                }
            ]
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectSlice: selectedElements => {
            if (selectedElements[0] !== undefined) 
                dispatch({type: SELECT_SLICE, entryIndex: selectedElements[0]._index})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);