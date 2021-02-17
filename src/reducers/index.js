import { combineReducers } from 'redux';
import photoReducer from './photoReducer';
import viewReducer from './viewReducer';


export default combineReducers({
    photoDetails: photoReducer,
    viewDetails: viewReducer
});