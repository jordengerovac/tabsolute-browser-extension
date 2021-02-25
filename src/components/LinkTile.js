import React from 'react';
import { connect } from 'react-redux';

class LinkTile extends React.Component {
    render() {
        return(
            <a style={{textDecoration: 'none', margin: '15px', color: this.props.viewDetails.fontColour}} href={this.props.tile.value}>
                <div style={{backgroundColor: '#1F2023', height: '120px', width: '200px', borderRadius: '10px', padding: '10px'}}>
                    <h4 style={{fontWeight: 'lighter'}}>{this.props.tile.name}</h4>
                    <i style={{fontSize: '70px', marginTop: '20px'}} className={this.props.tile.icon}></i>
                </div>
            </a>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      viewDetails: state.viewDetails
    }
  }
  

export default connect(mapStateToProps)(LinkTile);