import React, {Component} from 'react';
import {connect} from 'react-redux';

class DataTable extends Component {
    render() {
        let table = (
            <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Investment</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this
                            .props
                            .dataValues
                            .map((entry, index) => {
                                return (
                                    <tr
                                        className={this.props.selectedEntry === index
                                        ? 'active'
                                        : null}
                                        id='index'
                                        key={index}>
                                        <td>{this.props.labels[index]}</td>
                                        <td>{entry}
                                            USD</td>
                                    </tr>
                                )
                            })
}
                    </tbody>
                </table>
            </div>
        )
        return (this.props.currentRiskLevel
            ? (table)
            : <div>Loading data...</div>)
    }
}

const mapStateToProps = state => {
    return {selectedEntry: state.selectedEntry, dataValues: state.dataValues, labels: state.labels, currentRiskLevel: state.currentRiskLevel}
}

export default connect(mapStateToProps)(DataTable);