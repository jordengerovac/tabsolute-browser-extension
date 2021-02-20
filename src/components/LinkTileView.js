import '../App.css';
import SettingsBar from './SettingsBar';
import Switch from '@material-ui/core/Switch';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import LinkTile from './LinkTile';
import store from '../store';
import { fetchPhoto, togglePhoto } from '../actions/photoActions';

class LinkTileView extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto();
    /*
    if (Object.keys(store.getState().photoDetails.photo).length === 0) {
      this.props.fetchPhoto();
    }
    */
  }

  render() {
    const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#4495F6'
          }
        }
      });
    var photoURL = ""
    if (!this.props.photoDetails.loading) {
      photoURL = this.props.photoDetails.photo.urls.regular;
      if (!this.props.photoDetails.photoVisible)
        photoURL = "";
    }
    return (
      <div className="dashboard" style={{backgroundImage: 'url(' + photoURL + ')', width: '100vw', height: '100vh', backgroundSize: 'cover', margin: '0', padding: '0', backgroundRepeat: 'no-repeat', backgroundColor: '#30363D'}}>
        <SettingsBar />
        <div className="centered" style={{textAlign: 'center', display: 'flex', flexWrap: 'wrap', width: String(250 * 4) + 'px', justifyContent: 'center'}}>
          {this.props.linkTileDetails.tiles.map((tile) => {
            return (
              <LinkTile tile={tile}/>
            )
          })}
        </div>
        <div style={{position: 'absolute', bottom: '0px'}}>
          <MuiThemeProvider theme={theme}>
            <Switch
              checked={this.props.photoDetails.photoVisible}
              onClick={this.props.togglePhoto}
              onClick={this.props.togglePhoto}
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
    photoDetails: state.photoDetails,
    linkTileDetails: state.linkTileDetails
  }
}

export default connect(mapStateToProps, { fetchPhoto, togglePhoto })(LinkTileView);