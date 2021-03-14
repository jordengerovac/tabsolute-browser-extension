import { ADD_WIDGET, DELETE_WIDGET, MOVE_WIDGET, UPDATE_WIDGET } from './types';

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

export const updateWidget = (event) => dispatch => {
    dispatch({
        type: UPDATE_WIDGET,
        payload: event
    });
}

export const moveWidget = (event) => dispatch => {
    dispatch({
        type: MOVE_WIDGET,
        payload: event
    })
}
