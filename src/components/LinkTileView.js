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

    /*
    // Firefox 1.0+
    const isFirefox = typeof InstallTrigger !== 'undefined';
    if (isFirefox && this.props.photoDetails.photoVisible) {
      currentPhotoURLFull = this.props.photoDetails.currentPhoto.urls.regular;
      currentPhotoURLRegular = "";
    }
    */

    return (
      <div style={{height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: this.props.photoDetails.photoVisible ? 'black' : this.props.viewDetails.backgroundColour}}>
        <ProgressiveImage
          src={currentPhotoURLFull}
          placeholder={currentPhotoURLRegular}
        >
        {src =>
        <div className="dashboard" id="dashboard">
          <img alt="background" src={src} style={{width: '100vw', height: '100vh', objectFit: 'cover', margin: '0', padding: '0', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', backgroundColor: this.props.photoDetails.photoVisible ? 'black' : this.props.viewDetails.backgroundColour, zIndex: '0', position: 'relative', border: '0', overflow: 'hidden', display: this.props.photoDetails.photoVisible ? 'block' : 'none'}} />
          <div className='fade-out' style={{backgroundColor: 'black', height: '100vh', width: '100vw', position: 'absolute', top: '0', left: '0', zIndex: '1'}}></div>
          <div>
            <SettingsBar />
          </div>
          <div className="centered" style={{textAlign: 'center', display: 'flex', flexWrap: 'wrap', width: String(250 * 4) + 'px', justifyContent: 'center', position: 'absolute', zIndex: '2'}}>
            {this.props.linkTileDetails.tiles.map((tile) => {
              return (
                <LinkTile tile={tile} />
              )
            })}
          </div>
          <div style={{position: 'absolute', bottom: '0px', position: 'absolute', zIndex: '1'}}>
            <MuiThemeProvider theme={theme}>
              <Switch
                checked={this.props.photoDetails.photoVisible}
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