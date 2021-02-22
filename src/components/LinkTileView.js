import '../App.css';
import SettingsBar from './SettingsBar';
import Switch from '@material-ui/core/Switch';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import LinkTile from './LinkTile';
import { togglePhoto } from '../actions/photoActions';
import ProgressiveImage from 'react-progressive-graceful-image';
import PhotoCredits from './PhotoCredits';

class LinkTileView extends React.Component {
  render() {
    const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#4495F6'
          }
        }
      });

    var currentPhotoURLFull = "";
    var currentPhotoURLRegular = this.props.photoDetails.currentPhoto.urls.regular;
    if (!this.props.photoDetails.loading) {
      currentPhotoURLFull = this.props.photoDetails.currentPhoto.urls.full;
      if (!this.props.photoDetails.photoVisible) {
        currentPhotoURLFull = "";
        currentPhotoURLRegular = "";
      }
    }

    // Firefox 1.0+
    const isFirefox = typeof InstallTrigger !== 'undefined';
    if (isFirefox && this.props.photoDetails.photoVisible) {
      currentPhotoURLFull = this.props.photoDetails.currentPhoto.urls.regular;
      currentPhotoURLRegular = "";
    }

    return (
      <div style={{height: '100vh'}}>
        <ProgressiveImage
          src={currentPhotoURLFull}
          placeholder={currentPhotoURLRegular}
        >
        {src =>
        <div className="dashboard" style={{backgroundImage: 'url(' + src + ')', width: '100vw', height: '100vh', backgroundSize: 'cover', margin: '0', padding: '0', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', backgroundColor: this.props.viewDetails.backgroundColour}}>
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
          <PhotoCredits />
        </div>
        }
        </ProgressiveImage>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    photoDetails: state.photoDetails,
    linkTileDetails: state.linkTileDetails,
    viewDetails: state.viewDetails
  }
}

export default connect(mapStateToProps, { togglePhoto })(LinkTileView);