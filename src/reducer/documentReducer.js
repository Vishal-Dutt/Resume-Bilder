import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';

export default function documentReducer(state = initialState.document, action) {
    // when reducer runs for the first time the value of state is equal to initial state but after that the value is give by the redux itself.
    switch (action.type) {
        case actionTypes.SET_SKIN:
            // set the action id and skin of the 
            return { ...state, id: action.document.id, skinCd: action.document.skinCd }
        case actionTypes.UPDATE_SKIN:
            return { ...state, skinCd: action.document.skinCd }
        default:
            return state
    }
}