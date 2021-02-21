import '../App.css';
import React from 'react';
import { connect } from 'react-redux';
import DashboardView from './DashboardView';
import LinkTileView from './LinkTileView';
import { fetchPhoto } from '../actions/photoActions';
import Audio from './Audio';

class View extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto();
  }

  render(){
      return (
        <div>
          {this.props.widgetDetails.widgets.map((widget) => {
            if (widget.type === "Audio") {
              return(<div><Audio widget={widget} /></div>)
            }
          })}
          {this.props.viewDetails.view === "dashboard" ? <DashboardView /> : <LinkTileView />}
        </div>
        )
    }
  }

  function mapStateToProps(state, ownProps) {
    return {
      viewDetails: state.viewDetails,
      photoDetails: state.photoDetails,
      widgetDetails: state.widgetDetails
    }
  }

export default connect(mapStateToProps, { fetchPhoto })(View);
