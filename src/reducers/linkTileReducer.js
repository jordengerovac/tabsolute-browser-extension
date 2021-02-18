import { ADD_LINK_TILE, DELETE_LINK_TILE } from '../actions/types';
import { v4 as uuid } from 'uuid';

const initialState = {
    tiles: [
        {
          id: uuid(),
          name: "Twitter",
          value: "https://www.twitter.com",
          icon: "fab fa-twitter"
        },
        {
          id: uuid(),
          name: "Facebook",
          value: "https://www.facebook.com",
          icon: "fab fa-facebook"
        },
        {
          id: uuid(),
          name: "YouTube",
          value: "https://www.youtube.com",
          icon: "fab fa-youtube"
        }
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state
    }
}