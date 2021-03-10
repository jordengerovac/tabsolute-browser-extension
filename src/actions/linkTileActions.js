import { ADD_LINK_TILE, DELETE_LINK_TILE, UPDATE_LINK_TILE, TOGGLE_LINKS_ON_DASHBOARD } from './types';

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

export const updateLinkTile = (event) => dispatch => {
    dispatch({
        type: UPDATE_LINK_TILE,
        payload: event
    });
}

export const toggleLinksOnDashboard = (event) => dispatch => {
    dispatch({
        type: TOGGLE_LINKS_ON_DASHBOARD,
        payload: event
    });
}