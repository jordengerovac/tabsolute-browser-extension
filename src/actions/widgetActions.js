import { ADD_WIDGET, DELETE_WIDGET } from './types';

export const addWidget = (event) => dispatch => {
    dispatch({
        type: ADD_WIDGET,
        payload: event.target[0].value
    });
}

export const deleteWidget = (event) => dispatch => {
    dispatch({
        type: DELETE_WIDGET,
        payload: event
    });
}