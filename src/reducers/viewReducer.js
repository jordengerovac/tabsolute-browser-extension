import { CHANGE_VIEW, CHANGE_BACKGROUND_COLOUR, CHANGE_FONT_COLOUR, CHANGE_TILE_COLOUR, CHANGE_FONT_FAMILY } from '../actions/types';


const initialState = {
    view: "dashboard",
    fontColour: 'white',
    backgroundColour: '#2D3339',
    tileColour: '#1F2023',
    fontFamily: 'IBM Plex Sans',
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
        case CHANGE_TILE_COLOUR:
            return {
                ...state,
                tileColour: action.payload
            }
        case CHANGE_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.payload
            }
        default:
            return state;
    }
}