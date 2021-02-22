import '../App.css';
import SettingsBar from './SettingsBar';
import Greeting from './Greeting';
import Time from './Time';
import Quote from './Quote';
import Weather from './Weather';
import Switch from '@material-ui/core/Switch';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { togglePhoto } from '../actions/photoActions';
import ProgressiveImage from 'react-progressive-graceful-image';

class DashboardView extends React.Component {
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
      <div style={{height: '100vh', width: '100vw', backgroundColor: 'black'}}>
        <ProgressiveImage
          src={currentPhotoURLFull}
          placeholder={currentPhotoURLRegular}
          style={{height: '100vh', width: '100vw', backgroundColor: 'black'}}
        >
          {src => 
          <div className="dashboard" id="dashboard" style={{backgroundImage: 'url(' + src + ')', width: '100vw', height: '100vh', backgroundSize: 'cover', margin: '0', padding: '0', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', backgroundColor: this.props.viewDetails.backgroundColour}}>
            <div>
              <div style={{float: 'left'}}>
                <SettingsBar />
              </div>
              <div style={{float:'right', color: this.props.viewDetails.fontColour}}>
                {this.props.widgetDetails.widgets.map((widget) => {
                  if (widget.type === "Weather") 
                    return (<Weather widget={widget} />)
                })}
              </div>
            </div>
            <div className="centered" style={{textAlign: 'center', color: this.props.viewDetails.fontColour}}>
              {this.props.widgetDetails.widgets.map((widget) => {
                if (widget.type === "Greeting") {
                  return(<Greeting widget={widget} />)
                }
                else if (widget.type === "Time") {
                  return(<Time widget={widget} />)
                }
                else if (widget.type === "Quote") {
                  return(<Quote widget={widget} />)
                }
              })}
            </div>
            <div style={{position: 'absolute', bottom: '0px'}}>
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
            {this.props.photoDetails.photoVisible && !this.props.photoDetails.loading ? <div style={{position: 'absolute', bottom: '5px', right: '5px', color: this.props.viewDetails.fontColour, fontSize: '16px'}}>
            <p><a style={{color: this.props.viewDetails.fontColour}} href={this.props.photoDetails.currentPhoto.links.html + "/?utm_source=tabsolute&utm_medium=referral"}>Photo</a> by <a style={{color: this.props.viewDetails.fontColour}} href={this.props.photoDetails.currentPhoto.user.links.html + "/?utm_source=tabsolute&utm_medium=referral"}>{this.props.photoDetails.currentPhoto.user.first_name} {this.props.photoDetails.currentPhoto.user.last_name}</a> on <a style={{color: this.props.viewDetails.fontColour}} href="https://unsplash.com/?utm_source=tabsolute&utm_medium=referral">Unsplash</a></p>
            </div> : null}
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
    widgetDetails: state.widgetDetails,
    viewDetails: state.viewDetails
  }
}

export default connect(mapStateToProps, { togglePhoto })(DashboardView);