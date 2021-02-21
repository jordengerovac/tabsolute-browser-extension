import { ADD_WIDGET, DELETE_WIDGET, UPDATE_WEATHER_WIDGET, UPDATE_WIDGET, UPDATE_WIDGET_FONT } from '../actions/types';
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
          value: "12",
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
              value: "12",
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
          else {
            newWidget = {
              id: uuid(),
              type: "Quote",
              value: "",
              display: {
                customizationVisible: "false",
                font: "30",
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
        default:
          return state;
    }
}