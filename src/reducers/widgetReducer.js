import { ADD_WIDGET, DELETE_WIDGET } from '../actions/types';
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
          const newWidget = {
            id: uuid(),
            type: "Greeting",
            value: "",
            display: {
              customizationVisible: "false",
              font: "50",
              location: "center"
            }
          }
          return {
            ...state,
            widgets: [...state.widgets, newWidget]
          }
        case DELETE_WIDGET:
          const newWidgetsState = state.widgets.filter(widget => action.payload.target.id !== widget.id);
          return {
            ...state,
            widgets: newWidgetsState
          }
        default:
          return state;
    }
}