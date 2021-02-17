import { CHANGE_VIEW } from './types';

export const changeView = (event) => dispatch => {
    dispatch({
        type: CHANGE_VIEW,
        payload: event.target.value
    });
}