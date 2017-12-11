import React from 'react';
import {Pie} from 'react-chartjs-2';

const chartOptions = {
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

const Chart = (props) => {
    let data = {
        labels: props.data.labels,
        datasets: [
            {
                data: props.data.dataValues[props.currentRiskLevel - 1],
                backgroundColor: props.data.colors
            }
        ]
    };
    return (
        <div className="col-md-offset-1 col-md-4">
            <Pie
                data={data}
                options={chartOptions}
                width={200}
                height={200}
                onElementsClick={props.selectSlice}/>
            </div>
    )
}

export default Chart;