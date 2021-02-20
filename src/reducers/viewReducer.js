import { CHANGE_VIEW } from '../actions/types';


const initialState = {
    view: "dashboard",
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
        default:
            return state;
    }
}