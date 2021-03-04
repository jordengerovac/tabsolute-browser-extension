import { FETCH_PHOTO, TOGGLE_PHOTO, SET_DEFAULT_PHOTO } from '../actions/types';


const initialState = {
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
    firstFetch: 0,
    photoVisible: true,
    loading: true
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_PHOTO:
            if (state.firstFetch === 0) {
                return {
                    ...state,
                    currentPhoto: initialState.currentPhoto,
                    lastPhotoIndex: action.lastPhotoIndex,
                    loading: false,
                    firstFetch: 1
                }
            }
            else {
                return {
                    ...state,
                    currentPhoto: action.payload,
                    lastPhotoIndex: action.lastPhotoIndex,
                    loading: false,
                    firstFetch: -1
                }
            }
        case TOGGLE_PHOTO:
            return {
                ...state,
                photoVisible: !state.photoVisible
            }
        case SET_DEFAULT_PHOTO:
            return {
                ...state,
                currentPhoto: initialState.currentPhoto
            }
        default:
            return state;
    }
}