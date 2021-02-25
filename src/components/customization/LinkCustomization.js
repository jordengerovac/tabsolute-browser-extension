import '../../App.css';
import React from 'react';
import { connect } from 'react-redux';
import { addLinkTile, deleteLinkTile, updateLinkTile } from '../../actions/linkTileActions';

class LinkCustomization extends React.Component {
    render() {
        const iconMap = [
            {
                key: "Twitter",
                value: "fab fa-twitter"
            },
            {
                key: "Facebook",
                value: "fab fa-facebook"
            },
            {
                key: "YouTube",
                value: "fab fa-youtube"
            },
            {
                key: "Google",
                value: "fab fa-google"
            },
            {
                key: "Apple",
                value: "fab fa-apple"
            },
            {
                key: "GitHub",
                value: "fab fa-github"
            },
            {
                key: "Link",
                value: "fas fa-link"
            },
            {
                key: "TV",
                value: "fas fa-tv"
            },
            {
                key: "Wifi",
                value: "fas fa-wifi"
            },
            {
                key: "Briefcase",
                value: "fas fa-briefcase"
            },
            {
                key: "Bacon",
                value: "fas fa-bacon"
            },
            {
                key: "Smile",
                value: "fas fa-smile"
            },
            {
                key: "Envelope",
                value: "fas fa-envelope"
            },
            {
                key: "Camera",
                value: "fas fa-camera"
            },
            {
                key: "Book",
                value: "fas fa-book"
            },
            {
                key: "Cloud",
                value: "fas fa-cloud"
            },
            {
                key: "Music",
                value: "fas fa-music"
            },
            {
                key: "Compass",
                value: "fas fa-compass"
            },
            {
                key: "Plane",
                value: "fas fa-plane"
            },
            {
                key: "Shopping Cart",
                value: "fas fa-shopping-cart"
            },
            {
                key: "Bookmark",
                value: "fas fa-bookmark"
            }
        ];
        
        return(
            <div style={{textAlign: 'left'}}>
                <div style={{backgroundColor: '#2D3339', padding: '10px', borderRadius: '7px'}}>
                    <div style={{textAlign: 'left', margin: '0px 10px 20px 0px', display: 'flex'}}>
                        <p style={{float: 'left', color: 'white', marginTop: '3px'}}>Add Link Tile</p>
                        <button style={{backgroundColor: '#0bb508', border: 'none', borderRadius: '10%', fontSize: '15px', margin: '0px 0px 0px 18px', color: 'white', height: '25px', width: '25px', paddingBottom: '2px', cursor: 'pointer'}} onClick={this.props.addLinkTile}>+</button>
                    </div>
                    {this.props.tiles.map((tile) => {
                        return(
                            <div style={{marginBottom: '15px', display: 'flex', color: 'white', justifyContent: 'space-between'}}>
                                <div style={{float: 'left'}}>
                                    <div>
                                        <p>Name</p>
                                        <input defaultValue={tile.name} name="name" onChange={this.props.updateLinkTile} id={tile.id} style={{width: '140px', fontSize: '12px'}}></input>
                                    </div>
                                    <div>
                                        <p>URL</p>
                                        <input defaultValue={tile.value} name="value" onChange={this.props.updateLinkTile} id={tile.id} style={{width: '140px', fontSize: '12px'}}></input>
                                    </div>
                                    <div>
                                        <p>Icon</p>
                                        <select id={tile.id} style={{border: 'none', height: '20px', width: '147px', fontSize: '12px'}} onChange={this.props.updateLinkTile} name="icon">
                                                {iconMap.map((icon) => {
                                                    return(
                                                        <option value={icon.value} selected={icon.value === tile.icon}>{icon.key}</option>
                                                    )
                                                })}
                                        </select>
                                    </div>
                                </div>
                                <div style={{marginRight: '30px'}}>
                                    <i style={{color: 'white', cursor: 'pointer', margin: '0px 0px 0px 25px'}} class="fas fa-trash-alt" onClick={this.props.deleteLinkTile} id={tile.id}></i>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      linkTileDetails: state.linkTileDetails
    }
}

export default connect(mapStateToProps, { addLinkTile, deleteLinkTile, updateLinkTile })(LinkCustomization);