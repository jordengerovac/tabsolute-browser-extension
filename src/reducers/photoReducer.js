import { FETCH_PHOTO } from '../actions/types';


const initialState = {
    photo: {},
    loading: true
}

//const initialState = loadState();

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_PHOTO:
            //console.log('entered fetch photo reducer')
            return {
                ...state,
                photo: action.payload,
                loading: false
            }
        default:
            return state;
    }
}