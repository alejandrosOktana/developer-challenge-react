import React from 'react';

const Slider = (props) => {
    return (
        <div>
            <input type="range" name="" id="" min="1" max="10" step="1" onInput={props.setRiskLevel} defaultValue={props.currentRiskLevel}/>
            <h3 className="text-center">Risk Level: {props.currentRiskLevel}</h3>
        </div>
        
    )
}

export default Slider;