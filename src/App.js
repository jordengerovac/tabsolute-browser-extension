import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import DashboardView from './components/DashboardView';
import LinkTileView from './components/LinkTileView';

class App extends React.Component {
  render(){
      return (
        <div>
          {this.props.viewDetails.view === "dashboard" ? <DashboardView /> : <LinkTileView />}
        </div>
        )
    }
  }

  function mapStateToProps(state, ownProps) {
    return {
      viewDetails: state.viewDetails
    }
  }

export default connect(mapStateToProps)(App);
