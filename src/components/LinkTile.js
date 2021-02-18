import LinkTileView from "./LinkTileView"
import React from 'react';

class LinkTile extends React.Component {
    render() {
        return(
            <a style={{textDecoration: 'none', color:' white', margin: '15px'}} href={this.props.tile.value}>
                <div style={{backgroundColor: '#202124', height: '120px', width: '200px', borderRadius: '10px', padding: '10px'}}>
                <h4 style={{fontWeight: 'lighter'}}>{this.props.tile.name}</h4>
                <i style={{color: 'white', fontSize: '70px', marginTop: '20px'}} className={this.props.tile.icon}></i>
                </div>
            </a>
        )
    }
}

export default LinkTile;