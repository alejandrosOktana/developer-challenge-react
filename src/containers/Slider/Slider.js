import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_RISK_LEVEL } from '../../store/actions';

class Slider extends Component {
    render() {
        return (
            <div>
                <input type="range" name="" id="" min="1" max="10" step="1" onInput={this.props.setRiskLevel} defaultValue={this.props.currentRiskLevel}/>
                <h3 className="text-center">Risk Level: {this.props.currentRiskLevel}</h3>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        currentRiskLevel: state.currentRiskLevel
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setRiskLevel: event => dispatch({type:SET_RISK_LEVEL, riskLevel: +event.target.value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);