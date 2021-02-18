import '../../App.css';
import React from 'react';
import { connect } from 'react-redux';

class LinkTileWidget extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: '#30363D', padding: '10px', margin: '0px 10px 10px 10px', borderRadius: '7px'}}>
                <div style={{textAlign: 'left', margin: '0px 10px 10px 0px', minHeight: '10px'}}>
                    <p style={{float: 'left', color: 'white', fontWeight: 'bolder'}}>Link Tiles</p>
                    <div style={{float: 'right'}}>
                        <i onClick={this.props.toggleDisplaySettings} id="linkWidget" style={{color: 'white', cursor: 'pointer', margin: '0px 5px 0px 5px'}} class="fas fa-wrench"></i>
                    </div>
                </div>
                {/*
                {this.props.linkWidget.display.customizationVisible === "true" ? <LinkCustomization widget={this.props.linkWidget} tiles={this.props.tiles} addNewLinkTile={this.props.addNewLinkTile} handleTileChange={this.props.handleTileChange} handleTileDelete={this.props.handleTileDelete} /> : null}
                */}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      linkTileDetails: state.linkTileDetails
    }
}

export default connect(mapStateToProps)(LinkTileWidget);