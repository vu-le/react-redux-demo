import {TODO} from '../constant';
import { combineReducers } from 'redux';
import createReducer from '../utils/create-reducer';

const initialState = { isLoading: false, list: [] };

var actionHandlers = {
    [TODO.REQUEST]: (state, action) => {
        return { isLoading: true, list: [] };
    },
    [TODO.RECIEVE]: (state, action) => {
        return { isLoading: false, list: action.data || [] };
    }
}




export default createReducer(initialState, actionHandlers);