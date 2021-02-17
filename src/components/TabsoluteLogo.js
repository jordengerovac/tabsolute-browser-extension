import React from 'react';
import tabsolute from '../images/tabsolutelogo2.png';

class TabsoluteLogo extends React.Component {
    render() {
        return(
            <div>
                <img src={tabsolute} alt="tabsolute_logo" width="85px" height="60px" style={{marginTop: '20px'}} />
                <h4 style={{color: '#4495F6'}}>TABSOLUTE</h4>
            </div>
        )
    }
}

export default TabsoluteLogo;