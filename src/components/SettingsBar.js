import '../App.css';
import React from 'react';
import AddWidget from './widgets/AddWidget';
import TabsoluteLogo from './TabsoluteLogo';
import ViewType from './ViewType';
import { connect } from 'react-redux';
import DisplaySection from './DisplaySection';
import WidgetSection from './WidgetSection';
import LinkTileSection from './LinkTileSection';

class SettingsBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            settingsVisible: false
        }
    }

    toggleSettings = () => {
        this.setState({
            settingsVisible: !this.state.settingsVisible
        })
    }

    render() {
        return(
            <div>
                {this.state.settingsVisible ? 
                <div style={{display: 'flex', height: '101vh', margin: '0', padding: '0', position: 'fixed', overflowX: 'hidden', zIndex: '100'}}>
                    <div style={{height: '99vh', width: '320px', backgroundColor: '#1F2023', borderRadius: '0px 10px 10px 0px', textAlign: 'center', padding: '5px', borderRight: '1px solid #30363D', overflow: 'scroll'}}>
                        <TabsoluteLogo />
                        <DisplaySection />
                        <WidgetSection />
                        <LinkTileSection />
                        <p style={{marginBottom: '25px'}}><a href="https://paypal.me/jordengerovac?locale.x=en_US" style={{textDecoration: 'none', color: '#4495F6'}}>Support the project</a></p>
                        </div>
                    <div className="clickAway" style={{width: '80vw', height: '100%', cursor: 'pointer'}} onClick={this.toggleSettings}></div>
                </div> : <i id="settingsIcon" style={{color: 'white', fontSize: '22px', margin: '7px', cursor: 'pointer'}} className="fas fa-cog" onClick={this.toggleSettings}></i>}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      widgetDetails: state.widgetDetails
    }
}

export default connect(mapStateToProps)(SettingsBar);