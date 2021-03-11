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
import PhotoCredits from './PhotoCredits';

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
              <div className="flexLinks" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                {this.props.linkTileDetails.showLinksInDashboard ? 
                  this.props.linkTileDetails.tiles.map((tile) => {
                    return (
                      <div className="quickLink" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <i style={{fontSize: '30px'}} className={tile.icon}></i>
                        <a className="dashboardLinks" href={tile.value} style={{color: this.props.viewDetails.fontColour, fontSize: '20px'}}><p style={{margin: '5px 25px 5px 5px'}}>{tile.name}</p></a>
                      </div>
                    )
                  }) : null
                }
              </div>
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
    widgetDetails: state.widgetDetails,
    viewDetails: state.viewDetails,
    linkTileDetails: state.linkTileDetails
  }
}

export default connect(mapStateToProps, { togglePhoto })(DashboardView);