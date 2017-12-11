import * as actionTypes from './actions';
import Data from '../data';

const INITIAL_RISK_LEVEL = 1;

const getRiskLevelData = (riskLevel) => {return Data.dataValues[riskLevel-1]}

const initialState = {
    labels: Data.labels,
    colors: Data.colors,
    dataValues: getRiskLevelData(INITIAL_RISK_LEVEL),
    currentRiskLevel: INITIAL_RISK_LEVEL,
    selectedEntry: undefined
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECT_SLICE:
            return {
                ...state,
                selectedEntry: action.entryIndex,
            }
        case actionTypes.SET_RISK_LEVEL:
            return {
                ...state,
                currentRiskLevel: action.riskLevel,
                dataValues: getRiskLevelData(action.riskLevel),
            }
        default:
            return state
    }
}

export default reducer;