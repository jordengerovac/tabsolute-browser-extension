import { ADD_LINK_TILE, DELETE_LINK_TILE, UPDATE_LINK_TILE } from '../actions/types';
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
      case ADD_LINK_TILE:
        var newLinkTile = {}
        newLinkTile = {
          id: uuid(),
          name: "New Link Tile",
          value: "https://www.google.com",
          icon: "fas fa-link"
        }
        return {
          ...state,
          tiles: [...state.tiles, newLinkTile]
        }
      case DELETE_LINK_TILE:
        var newLinkTileState = state.tiles.filter(tile => action.payload.target.id !== tile.id);
        return {
          ...state,
          tiles: newLinkTileState
        }
      case UPDATE_LINK_TILE:
        var attribute = action.payload.target.name;
        var newUpdateState = state.tiles.map((tile) => {
          if (tile.id === action.payload.target.id) {
            if (attribute === "name") {
              tile.name = action.payload.target.value
            }
            else if (attribute === "icon") {
              tile.icon = action.payload.target.value
            }
            else {
              tile.value = action.payload.target.value
            }
          }
        return tile;
        })
        return {
          ...state,
          tiles: newUpdateState
        }
      default:
        return state
    }
}