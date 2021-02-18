import { combineReducers } from 'redux';
import photoReducer from './photoReducer';
import viewReducer from './viewReducer';
import widgetReducer from './widgetReducer';


export default combineReducers({
    photoDetails: photoReducer,
    viewDetails: viewReducer,
    widgetDetails: widgetReducer
});