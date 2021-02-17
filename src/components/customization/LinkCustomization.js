import '../../App.css';
import React from 'react';

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
                key: "Apple",
                value: "fab fa-apple"
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
            }

        ];
        
        return(
            <div style={{textAlign: 'left'}}>
                <div style={{backgroundColor: '#30363D', padding: '10px', borderRadius: '7px'}}>
                    <div style={{textAlign: 'left', margin: '0px 10px 20px 0px', display: 'flex'}}>
                        <p style={{float: 'left', color: 'white', marginTop: '3px'}}>Add Link Tile</p>
                        <button style={{backgroundColor: '#0bb508', border: 'none', borderRadius: '10%', fontSize: '15px', margin: '0px 0px 0px 18px', color: 'white', height: '25px', width: '25px', paddingBottom: '2px', cursor: 'pointer'}} onClick={this.props.addNewLinkTile}>+</button>
                    </div>
                    {this.props.tiles.map((tile) => {
                        return(
                            <div style={{marginBottom: '15px', display: 'flex', color: 'white', justifyContent: 'space-between'}}>
                                <div style={{float: 'left'}}>
                                    <div>
                                        <p>Name</p>
                                        <input value={tile.name} name="name" onChange={this.props.handleTileChange} id={tile.id} style={{width: '140px'}}></input>
                                    </div>
                                    <div>
                                        <p>URL</p>
                                        <input value={tile.value} name="value" onChange={this.props.handleTileChange} id={tile.id} style={{width: '140px'}}></input>
                                    </div>
                                    <div>
                                        <p>Icon</p>
                                        <select id={tile.id} style={{border: 'none', height: '20px', width: '147px'}} onChange={this.props.handleTileChange} name="icon">
                                                {iconMap.map((icon) => {
                                                    return(
                                                        <option value={icon.value} selected={icon.value === tile.icon}>{icon.key}</option>
                                                    )
                                                })}
                                        </select>
                                    </div>
                                </div>
                                <div style={{marginRight: '30px'}}>
                                    <i style={{color: 'white', cursor: 'pointer', margin: '0px 0px 0px 25px'}} class="fas fa-trash-alt" onClick={this.props.handleTileDelete} id={tile.id}></i>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default LinkCustomization;