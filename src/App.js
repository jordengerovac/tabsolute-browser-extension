import './App.css';
import React from 'react';
import SettingsBar from './components/SettingsBar';
import WeatherWidget from './components/widgets/WeatherWidget';
import { v4 as uuid } from 'uuid';
import Switch from '@material-ui/core/Switch';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './store';
import { connect } from 'react-redux';
import { fetchPhoto } from './actions/photoActions';
import DashboardView from './components/DashboardView';
import LinkTileView from './components/LinkTileView';

class App extends React.Component {
  constructor() {
    super();
    this.state = {      
      photo: "",
      photoDetails: {
        artist: "",
        profileLink: "",
        photoLink: ""
      },
      photoBackground: "true",
      refresh: "false",
      settingsVisible: "false",
      viewType: "dashboard",
      tileColumns: 4,
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
      ],
      linkWidget: {
        value: "12",
        numLinks: 3,
        display: {
          customizationVisible: "false",
          font: "50",
          location: "center"
        },
      },
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
  }
  
  render(){
      return (
        <Provider store={store}>
          {this.state.viewType === "dashboard" ? <DashboardView /> : <LinkTileView />}
        </Provider>
        )
    }
  }

export default App;
