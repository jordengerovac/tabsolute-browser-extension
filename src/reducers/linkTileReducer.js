import { ADD_LINK_TILE, DELETE_LINK_TILE, UPDATE_LINK_TILE, TOGGLE_LINKS_ON_DASHBOARD, MOVE_LINK_TILE } from '../actions/types';
import { v4 as uuid } from 'uuid';

const initialState = {
    showLinksInDashboard: false,
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
          name: "Link",
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
      case TOGGLE_LINKS_ON_DASHBOARD:
        return {
          ...state,
          showLinksInDashboard: !state.showLinksInDashboard
        };
      case MOVE_LINK_TILE:
        var swappedTileState;
        if (action.payload.target.className === "fas fa-arrow-down") {
          if (state.tiles.length > 1 && action.payload.target.id !== state.tiles[state.tiles.length-1].id) {
            for(var i = 0; i < state.tiles.length; i++) {
              if (state.tiles[i].id === action.payload.target.id) {
                swappedTileState = immutableSwap(state.tiles, i, i+1);
              }
            }
            return {
              ...state,
              tiles: swappedTileState
            }
          }
        }
        else if (action.payload.target.className === "fas fa-arrow-up") {
          if (state.tiles.length > 1 && action.payload.target.id !== state.tiles[0].id) {
            for(var j = 0; j < state.tiles.length; j++) {
              if (state.tiles[j].id === action.payload.target.id) {
                swappedTileState = immutableSwap(state.tiles, j, j-1);
              }
            }
            return {
              ...state,
              tiles: swappedTileState
            }
          }
        }
        return state;
      default:
        return state
    }
}

const immutableSwap = (widgets, firstIndex, secondIndex) => {
  const result = [...widgets];
  [result[firstIndex], result[secondIndex]] = [result[secondIndex], result[firstIndex]];
  return result;
}