import '../App.css';
import React from 'react';
import { connect } from 'react-redux';
import DashboardView from './DashboardView';
import LinkTileView from './LinkTileView';
import { fetchPhoto, setDefaultPhoto } from '../actions/photoActions';
import Audio from './Audio';

class View extends React.Component {
  constructor() {
    super();
    this.state = {
      prevURL: ""
    }
  }

  componentDidMount() {
    this.setState({
      prevURL: this.props.photoDetails.currentPhoto.urls.regular
    })
    this.props.fetchPhoto();
  }

  render(){
    if ((this.state.prevURL !== this.props.photoDetails.currentPhoto.urls.regular) || this.props.photoDetails.firstFetch === 1) {
      return (
          <div style={{width: '100vw', height: '100vh', backgroundColor: this.props.viewDetails.backgroundColour}}>
            {this.props.widgetDetails.widgets.map((widget) => {
              if (widget.type === "Audio") {
                return(<div><Audio widget={widget} /></div>)
              }
            })}
            {this.props.viewDetails.view === "dashboard" ? <DashboardView /> : <LinkTileView />}
          </div>
        )
    }
    
    else {
      return (
        <div style={{width: '100vw', height: '100vh', backgroundColor: this.props.viewDetails.backgroundColour}}></div>
      )
    }
  }
}

  function mapStateToProps(state, ownProps) {
    return {
      viewDetails: state.viewDetails,
      photoDetails: state.photoDetails,
      widgetDetails: state.widgetDetails
    }
  }

export default connect(mapStateToProps, { fetchPhoto, setDefaultPhoto })(View);
