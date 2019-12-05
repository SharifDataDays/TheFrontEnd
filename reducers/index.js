import {combineReducers} from 'redux';
import homeReducer from '../reducers/home'
const mainReducer = combineReducers({homeReducer})

export default mainReducer;