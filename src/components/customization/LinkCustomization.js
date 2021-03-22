import '../../App.css';
import React from 'react';
import { connect } from 'react-redux';
import { addLinkTile, deleteLinkTile, updateLinkTile, toggleLinksOnDashboard, moveLinkTile } from '../../actions/linkTileActions';

class LinkCustomization extends React.Component {
    render() {
        const iconMap = [
            {
                key: "Address Book",
                value: "fas fa-address-book"
            },
            {
                key: "Amazon",
                value: "fab fa-amazon"
            },
            {
                key: "Atom",
                value: "fas fa-atom"
            },
            {
                key: "Apple",
                value: "fab fa-apple"
            },
            {
                key: "Bacon",
                value: "fas fa-bacon"
            },
            {
                key: "Baseball",
                value: "fas fa-baseball-ball"
            },
            {
                key: "Basketball",
                value: "fas fa-basketball-ball"
            },
            {
                key: "Beer",
                value: "fas fa-beer"
            },
            {
                key: "Bell",
                value: "fas fa-bell"
            },
            {
                key: "Book",
                value: "fas fa-book"
            },
            {
                key: "Book Open",
                value: "fas fa-book-open"
            },
            {
                key: "Bookmark",
                value: "fas fa-bookmark"
            },
            {
                key: "Briefcase",
                value: "fas fa-briefcase"
            },
            {
                key: "Camera",
                value: "fas fa-camera"
            },
            {
                key: "Cloud",
                value: "fas fa-cloud"
            },
            {
                key: "Cocktail",
                value: "fas fa-cocktail"
            },
            {
                key: "Code",
                value: "fas fa-code"
            },
            {
                key: "Compass",
                value: "fas fa-compass"
            },
            {
                key: "Dumbbell",
                value: "fas fa-dumbbell"
            },
            {
                key: "Envelope",
                value: "fas fa-envelope"
            },
            {
                key: "Envelope Open",
                value: "fas fa-envelope-open"
            },
            {
                key: "Facebook",
                value: "fab fa-facebook"
            },
            {
                key: "File",
                value: "fas fa-file-alt"
            },
            {
                key: "GitHub",
                value: "fab fa-github"
            },
            {
                key: "Globe",
                value: "fas fa-globe"
            },
            {
                key: "Google",
                value: "fab fa-google"
            },
            {
                key: "Graduation Cap",
                value: "fas fa-graduation-cap"
            },
            {
                key: "Hockey Puck",
                value: "fas fa-hockey-puck"
            },
            {
                key: "Laptop",
                value: "fas fa-laptop"
            },
            {
                key: "Leaf",
                value: "fas fa-leaf"
            },
            {
                key: "Link",
                value: "fas fa-link"
            },
            {
                key: "Medical Notes",
                value: "fas fa-notes-medical"
            },
            {
                key: "Music",
                value: "fas fa-music"
            },
            {
                key: "Passport",
                value: "fas fa-passport"
            },
            {
                key: "Pencil & Ruler",
                value: "fas fa-pencil-ruler"
            },
            {
                key: "Plane",
                value: "fas fa-plane"
            },
            {
                key: "Running",
                value: "fas fa-running"
            },
            {
                key: "School",
                value: "fas fa-school"
            },
            {
                key: "Shopping Cart",
                value: "fas fa-shopping-cart"
            },
            {
                key: "Smile",
                value: "fas fa-smile"
            },
            {
                key: "TV",
                value: "fas fa-tv"
            },
            {
                key: "Twitter",
                value: "fab fa-twitter"
            },
            {
                key: "Video Camera",
                value: "fas fa-video"
            },
            {
                key: "Wifi",
                value: "fas fa-wifi"
            },
            {
                key: "YouTube",
                value: "fab fa-youtube"
            }
        ];
        
        return(
            <div style={{textAlign: 'left'}}>
                <div style={{backgroundColor: '#2D3339', padding: '10px', borderRadius: '7px'}}>
                    <div style={{textAlign: 'left', margin: '0px 10px 20px 0px', display: 'flex'}}>
                        <p style={{float: 'left', color: 'white', marginTop: '3px'}}>Add Link Tile</p>
                        <button style={{backgroundColor: '#0bb508', border: 'none', borderRadius: '10%', fontSize: '15px', margin: '2px 0px 0px 18px', color: 'white', height: '25px', width: '25px', padding: '0px 0px 2px 0px', cursor: 'pointer'}} onClick={this.props.addLinkTile}>+</button>
                    </div>
                    {this.props.tiles.map((tile) => {
                        return(
                            <div style={{marginBottom: '15px', display: 'flex', color: 'white', justifyContent: 'space-between'}}>
                                <div style={{float: 'left'}}>
                                    <div>
                                        <p>Name</p>
                                        <input value={tile.name} name="name" onChange={this.props.updateLinkTile} id={tile.id} style={{width: '140px', fontSize: '12px'}}></input>
                                    </div>
                                    <div>
                                        <p>URL</p>
                                        <input value={tile.value} name="value" onChange={this.props.updateLinkTile} id={tile.id} style={{width: '140px', fontSize: '12px'}}></input>
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
                                <div>
                                    <i onClick={this.props.moveLinkTile} id={tile.id} style={{color: 'lightgrey', cursor: 'pointer', margin: '0px 5px 0px 5px'}} className="fas fa-arrow-up"></i>
                                    <i onClick={this.props.moveLinkTile} id={tile.id} style={{color: 'lightgrey', cursor: 'pointer', margin: '0px 5px 0px 5px'}} className="fas fa-arrow-down"></i>
                                    <i style={{color: 'lightgrey', cursor: 'pointer', margin: '0px 5px 0px 5px'}} class="fas fa-trash-alt" onClick={this.props.deleteLinkTile} id={tile.id}></i>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div style={{margin: '0px 0px 10px 0px', color: 'white', justifyContent: 'center', display: 'flex'}}>
                    <input type="checkbox" id="showlinks" name="showlinks" checked={this.props.linkTileDetails.showLinksInDashboard} onChange={this.props.toggleLinksOnDashboard} />
                    <label for="showlinks">Show in Dashboard View</label>
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

export default connect(mapStateToProps, { addLinkTile, deleteLinkTile, updateLinkTile, toggleLinksOnDashboard, moveLinkTile })(LinkCustomization);