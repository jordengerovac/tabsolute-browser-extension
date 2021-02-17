import '../App.css';
import React from 'react';
import tabsolute from '../images/tabsolutelogo2.png';
import WidgetCustomization from './customization/WidgetCustomization';
import LinkCustomization from './customization/LinkCustomization';
import AddWidget from './widgets/AddWidget';
import TabsoluteLogo from './TabsoluteLogo';
import ViewType from './ViewType';

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
                    <div style={{height: '99vh', width: '320px', backgroundColor: '#202124', borderRadius: '0px 10px 10px 0px', textAlign: 'center', padding: '5px', borderRight: '1px solid #30363D', overflow: 'scroll'}}>
                        <TabsoluteLogo />
                        <ViewType />
                        <AddWidget />
                    </div>
                    <div className="clickAway" style={{width: '80vw', height: '100%', cursor: 'pointer'}} onClick={this.toggleSettings}></div>
                </div> : <i style={{color: 'white', fontSize: '22px', margin: '7px', cursor: 'pointer'}} className="fas fa-cog" onClick={this.toggleSettings}></i>}
            </div>
        )
    }
}

export default SettingsBar;