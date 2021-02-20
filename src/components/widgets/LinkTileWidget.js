import '../../App.css';
import React from 'react';
import { connect } from 'react-redux';
import LinkCustomization from '../customization/LinkCustomization';

class LinkTileWidget extends React.Component {
    constructor() {
        super();
        this.state = {
            displaySettingsVisible: false
        }
    }

    toggleDisplaySettings = () => {
        this.setState({
            displaySettingsVisible: !this.state.displaySettingsVisible
        })
    }

    render() {
        return (
            <div style={{backgroundColor: '#30363D', padding: '10px', margin: '0px 10px 10px 10px', borderRadius: '7px'}}>
                <div style={{textAlign: 'left', margin: '0px 10px 10px 0px', minHeight: '10px'}}>
                    <p style={{float: 'left', color: 'white', fontWeight: 'bolder'}}>Link Tiles</p>
                    <div style={{float: 'right'}}>
                        <i onClick={this.toggleDisplaySettings} id="linkWidget" style={{color: 'white', cursor: 'pointer', margin: '0px 5px 0px 5px'}} class="fas fa-wrench"></i>
                    </div>
                </div>
                {this.state.displaySettingsVisible ? <LinkCustomization tiles={this.props.linkTileDetails.tiles} /> : null}
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