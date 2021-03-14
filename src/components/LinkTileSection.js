import '../App.css';
import React from 'react';
import LinkTileWidget from './widgets/LinkTileWidget';

class LinkTileSection extends React.Component {
    render() {
        return(
            <div>
                <h4 style={{textAlign: 'left', color: 'white', margin: '30px 0px 10px 15px'}}>LINK TILES</h4>
                <LinkTileWidget />
            </div>
        )
    }
}

export default LinkTileSection;