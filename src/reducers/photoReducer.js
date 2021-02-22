import { FETCH_PHOTO, TOGGLE_PHOTO } from '../actions/types';


const initialState = {
    fetchedPhoto: {},
    currentPhoto: {
        urls: {
            regular: "https://images.unsplash.com/photo-1573491768509-318a36d85f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDQ2ODV8MHwxfGNvbGxlY3Rpb258MXwxOTQyODE1OXx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080",
            full: "https://images.unsplash.com/photo-1573491768509-318a36d85f5d?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMDQ2ODV8MHwxfGNvbGxlY3Rpb258MXwxOTQyODE1OXx8fHx8Mnw&ixlib=rb-1.2.1&q=85"
        },
        user: {
            first_name: "Daniel",
            last_name: "Seßler",
            links: {
                html: "https://unsplash.com/@danielsessler"
            }
        },
        links: {
            html: "https://unsplash.com/photos/DSlHgwYuU3k"
        }
    },
    photoVisible: true,
    loading: true
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_PHOTO:
            var currentPhotoObj = initialState.currentPhoto;
            if (Object.keys(state.fetchedPhoto).length !== 0) {
                currentPhotoObj = state.fetchedPhoto;
            }
            return {
                ...state,
                currentPhoto: currentPhotoObj,
                fetchedPhoto: action.payload,
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