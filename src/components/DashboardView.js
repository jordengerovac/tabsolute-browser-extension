import '../App.css';
import SettingsBar from './SettingsBar';
import WeatherWidget from './widgets/WeatherWidget';
import Switch from '@material-ui/core/Switch';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPhoto } from '../actions/photoActions';
import { loadState, saveState } from '../actions/stateActions';
import store from '../store';

class DashboardView extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            photoBackground: "true",
        })
    }

    componentDidMount() {
      if (!store.getState().photoDetails) {
        this.props.fetchPhoto();
      }
    }

    togglePhotoBackground = () => {
        var toggle = "";
        if (this.state.photoBackground === "true") {
          toggle = "false";
        }
        else {
          toggle = "true";
        }
        this.setState({
          photoBackground: toggle
        })
      }

    render() {
      const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#4495F6'
          }
        }
      });
      var photoURL = this.props.photoDetails.photo.urls.regular;
      if (this.state.photoBackground === "false")
        photoURL = "";
      return (
          <div className="dashboard" style={{backgroundImage: 'url(' + photoURL + ')', width: '100vw', height: '100vh', backgroundSize: 'cover', margin: '0', padding: '0', backgroundRepeat: 'no-repeat', backgroundColor: '#202124'}}>
            <SettingsBar />
            <div style={{position: 'absolute', bottom: '0px'}}>
              <MuiThemeProvider theme={theme}>
                <Switch
                  checked={this.state.photoBackground === "true"}
                  onClick={this.togglePhotoBackground}
                  color="primary"
                  name="photoBackground"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </MuiThemeProvider>
            </div>
          </div>
      )
    }
}


function mapStateToProps(state, ownProps) {
  return {
    photoDetails: state.photoDetails
  }
}

export default connect(mapStateToProps, { fetchPhoto })(DashboardView);
//export default DashboardView;