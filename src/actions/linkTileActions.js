import { ADD_LINK_TILE, DELETE_LINK_TILE } from './types';

export const addLinkTile = (event) => dispatch => {
    dispatch({
        type: ADD_LINK_TILE,
        payload: event
    });
}

export const deleteLinkTile = (event) => dispatch => {
    dispatch({
        type: DELETE_LINK_TILE,
        payload: event
    });
}