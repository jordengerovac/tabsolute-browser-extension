import { ADD_WIDGET, DELETE_WIDGET, MOVE_WIDGET, UPDATE_WEATHER_WIDGET, UPDATE_WIDGET, UPDATE_WIDGET_FONT, UPDATE_QUOTE_WIDGET } from '../actions/types';
import { v4 as uuid } from 'uuid';

const initialState = {
    widgets: [
        {
          id: uuid(),
          type: "Greeting",
          value: "",
          display: {
            customizationVisible: "false",
            font: "50",
            location: "center"
          }
        },
        {
          id: uuid(),
          type: "Time",
          value: "24",
          display: {
            customizationVisible: "false",
            font: "50",
            location: "center"
          },
        }
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_WIDGET:
          var newWidget = {}
          if (action.payload === "Greeting") {
            newWidget = {
              id: uuid(),
              type: "Greeting",
              value: "",
              display: {
                customizationVisible: "false",
                font: "50",
                location: "center"
              }
            }
          }
          else if (action.payload === "Time") {
            newWidget = {
              id: uuid(),
              type: "Time",
              value: "24",
              display: {
                customizationVisible: "false",
                font: "50",
                location: "center"
              }
            }
          }
          else if (action.payload === "Weather") {
            newWidget = {
              id: uuid(),
              type: "Weather",
              value: "",
              display: {
                customizationVisible: "false",
                font: "20",
                location: "center"
              }
            }
          }
          else if (action.payload === "Audio") {
            newWidget = {
              id: uuid(),
              type: "Audio",
              value: "Once Again",
              display: {
                customizationVisible: "false",
                font: "20",
                location: "center"
              }
            }
          }
          else if (action.payload === "Quote") {
            newWidget = {
              id: uuid(),
              type: "Quote",
              value: "",
              display: {
                customizationVisible: "false",
                font: "20",
                location: "center"
              }
            }
          }
          else if (action.payload === "Search Bar") {
            newWidget = {
              id: uuid(),
              type: "Search Bar",
              value: "Google",
              display: {
                customizationVisible: "false",
                font: "15",
                location: "center"
              }
            }
          }
          return {
            ...state,
            widgets: [...state.widgets, newWidget]
          }
        case DELETE_WIDGET:
          var newWidgetsState = state.widgets.filter(widget => action.payload.target.id !== widget.id);
          return {
            ...state,
            widgets: newWidgetsState
          }
        case UPDATE_WIDGET:
          var newUpdateState = state.widgets.map(widget => {
            if (widget.id === action.payload.target.id) {
                widget.value = action.payload.target.value
            }
            return widget;
          })
          return {
            ...state,
            widgets: newUpdateState
          }
        case UPDATE_WEATHER_WIDGET:
          var newUpdateWeatherState = state.widgets.map(widget => {
            if (widget.id === action.id) {
              widget.value = action.payload
            }
            return widget;
          })
          return {
            ...state,
            widgets: newUpdateWeatherState
          }
        case UPDATE_WIDGET_FONT:
          var newUpdateWidgetFontState = state.widgets.map(widget => {
            if (widget.id === action.id) {
              widget.display.font = action.payload
            }
            return widget;
          })
          return {
            ...state,
            widgets: newUpdateWidgetFontState
          }
          case UPDATE_QUOTE_WIDGET:
          var newUpdateQuoteState = state.widgets.map(widget => {
            if (widget.id === action.id) {
              widget.value = action.payload
            }
            return widget;
          })
          return {
            ...state,
            widgets: newUpdateQuoteState
          }
        case MOVE_WIDGET:
          var swappedWidgetState;
          if (action.payload.target.className === "fas fa-arrow-down") {
            if (state.widgets.length > 1 && action.payload.target.id !== state.widgets[state.widgets.length-1].id) {
              for(var i = 0; i < state.widgets.length; i++) {
                if (state.widgets[i].id === action.payload.target.id) {
                  swappedWidgetState = immutableSwap(state.widgets, i, i+1);
                }
              }
              return {
                ...state,
                widgets: swappedWidgetState
              }
            }
          }
          else if (action.payload.target.className === "fas fa-arrow-up") {
            if (state.widgets.length > 1 && action.payload.target.id !== state.widgets[0].id) {
              for(var j = 0; j < state.widgets.length; j++) {
                if (state.widgets[j].id === action.payload.target.id) {
                  swappedWidgetState = immutableSwap(state.widgets, j, j-1);
                }
              }
              return {
                ...state,
                widgets: swappedWidgetState
              }
            }
          }
          return state;
        default:
          return state;
    }
}

const immutableSwap = (widgets, firstIndex, secondIndex) => {
  const result = [...widgets];
  [result[firstIndex], result[secondIndex]] = [result[secondIndex], result[firstIndex]];
  return result;
}