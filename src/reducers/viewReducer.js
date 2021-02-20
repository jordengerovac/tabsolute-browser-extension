import { CHANGE_VIEW, CHANGE_BACKGROUND_COLOUR, CHANGE_FONT_COLOUR } from '../actions/types';


const initialState = {
    view: "dashboard",
    fontColour: 'white',
    backgroundColour: '#2D3339',
    loading: true
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CHANGE_VIEW:
            return {
                ...state,
                view: action.payload,
                loading: false
            }
        case CHANGE_BACKGROUND_COLOUR:
            return {
                ...state,
                backgroundColour: action.payload
            }
        case CHANGE_FONT_COLOUR:
            return {
                ...state,
                fontColour: action.payload
            }
        default:
            return state;
    }
}