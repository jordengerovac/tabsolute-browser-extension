import React from 'react';
import { connect } from 'react-redux';
import { changeView } from '../actions/viewActions';
import store from '../store';

class ViewType extends React.Component {
    render() {
        const itemChecked = store.getState().viewDetails.view;
        return(
            <div style={{margin: '10px 0px 20px 0px'}}>
                <fieldset name="view" style={{border: "none", display: 'flex', color: 'white', margin: 'auto', justifyContent: 'center'}}>
                    <label style={{margin: '0'}}>Dashboard</label>
                    <input type="radio" value="dashboard" name="view" style={{marginRight: '25px'}} onChange={this.props.changeView} defaultChecked={itemChecked === "dashboard"}></input>
                    <label>Link Tiles</label>
                    <input value="tile" type="radio" name="view" onChange={this.props.changeView} defaultChecked={itemChecked === "tile"}></input>
                </fieldset>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        viewDetails: state.viewDetails
    }
  }
  
  export default connect(mapStateToProps, { changeView })(ViewType);