import { combineReducers } from 'redux';
import photoReducer from './photoReducer';
import viewReducer from './viewReducer';
import widgetReducer from './widgetReducer';
import linkTileReducer from './linkTileReducer';


export default combineReducers({
    photoDetails: photoReducer,
    viewDetails: viewReducer,
    widgetDetails: widgetReducer,
    linkTileDetails: linkTileReducer
});