import '../App.css';
import SettingsBar from './SettingsBar';
import Switch from '@material-ui/core/Switch';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import LinkTile from './LinkTile';
import { togglePhoto } from '../actions/photoActions';

class LinkTileView extends React.Component {
  render() {
    const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#4495F6'
          }
        }
      });

    var currentPhotoURL = ""
    if (!this.props.photoDetails.loading) {
      currentPhotoURL = this.props.photoDetails.currentPhoto.urls.full;
      if (!this.props.photoDetails.photoVisible)
        currentPhotoURL = "";
    }

    var fetchedPhotoURL = ""
    if (!this.props.photoDetails.loading) {
      fetchedPhotoURL = this.props.photoDetails.fetchedPhoto.urls.full;
      if (!this.props.photoDetails.photoVisible)
        fetchedPhotoURL = "";
    }

    return (
      <div style={{height: '100vh', overflow: 'hidden'}}>
        <div className="dashboard" style={{backgroundImage: 'url(' + currentPhotoURL + ')', width: '100vw', height: '100vh', backgroundSize: 'cover', margin: '0', padding: '0', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', backgroundColor: this.props.viewDetails.backgroundColour}}>
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
          {this.props.photoDetails.photoVisible && !this.props.photoDetails.loading ? <div style={{position: 'absolute', bottom: '5px', right: '5px', color: this.props.viewDetails.fontColour}}>
              <p><a style={{color: this.props.viewDetails.fontColour}} href={this.props.photoDetails.currentPhoto.links.html + "https://unsplash.com/?utm_source=tabsolute&utm_medium=referral"}>Photo</a> by <a style={{color: this.props.viewDetails.fontColour}} href={this.props.photoDetails.currentPhoto.user.links.html + "/?utm_source=tabsolute&utm_medium=referral"}>{this.props.photoDetails.currentPhoto.user.first_name} {this.props.photoDetails.currentPhoto.user.last_name}</a> on <a style={{color: this.props.viewDetails.fontColour}} href="https://unsplash.com/?utm_source=tabsolute&utm_medium=referral">Unsplash</a></p>
              </div> : null}
        </div>
        <div style={{backgroundImage: 'url(' + fetchedPhotoURL + ')', width: '100vw', height: '100vh', backgroundSize: 'cover'}}>
        </div>
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