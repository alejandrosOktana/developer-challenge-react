import React from 'react';

const DataTable = (props) => {
    let table = (
        <div>Loading...</div>
    );
    if (props.currentRiskLevel !== undefined) {
        table = (
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Investment</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props
                                .data
                                .dataValues[props.currentRiskLevel - 1]
                                .map((entry, index, array) => {
                                    return (
                                        <tr className={props.selectedEntry === index ? 'active' : null}
                                            id="index"
                                            key={index}
                                        >
                                            <td>{props.data.labels[index]}</td>
                                            <td>{entry} USD</td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    return (table)
}

export default DataTable;