import { FETCH_PHOTO, TOGGLE_PHOTO } from '../actions/types';


const initialState = {
    photo: {},
    photoVisible: true,
    loading: true
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_PHOTO:
            return {
                ...state,
                photo: action.payload,
                loading: false
            }
        case TOGGLE_PHOTO:
            return {
                ...state,
                photoVisible: !state.photoVisible
            }
        default:
            return state;
    }
}