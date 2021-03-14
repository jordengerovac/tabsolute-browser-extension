import '../App.css';
import React from 'react';
import { connect } from 'react-redux';
import ViewType from './ViewType';
import { CHANGE_BACKGROUND_COLOUR, CHANGE_FONT_COLOUR, CHANGE_TILE_COLOUR, CHANGE_FONT_FAMILY } from '../actions/types';
import store from '../store';

class DisplaySection extends React.Component {
    updateDisplay = (event) => {
        var payload;
        if (event.target.name === "fontFamily") {
            payload = {
                type: CHANGE_FONT_FAMILY,
                payload: event.target.value
            }
            store.dispatch(payload);
        }
        else {
            if (event.key === "Enter" ) {
                payload = {};
                if (event.target.name === "background") {
                    payload = {
                        type: CHANGE_BACKGROUND_COLOUR,
                        payload: event.target.value
                    }
                }
                else if (event.target.name === "font") {
                    payload = {
                        type: CHANGE_FONT_COLOUR,
                        payload: event.target.value
                    }
                }
                else if (event.target.name === "tile") {
                    payload = {
                        type: CHANGE_TILE_COLOUR,
                        payload: event.target.value
                    }
                }
                store.dispatch(payload);
            }
        }
    }

    render() {
        const fonts = [
            {
                name: 'Arial'
            },
            {
                name: 'Brush Script MT'
            },
            {
                name: 'Courier New'
            },
            {
                name: 'DotGothic16'
            },
            {
                name: 'Garamond'
            },
            {
                name: 'Georgia'
            },
            {
                name: 'Helvetica'
            },
            {
                name: 'Hind'
            },
            {
                name: 'IBM Plex Sans'
            },
            {
                name: 'Montserrat'
            },
            {
                name: 'Open Sans'
            },
            {
                name: 'Oswald'
            },
            {
                name: 'Roboto'
            },
            {
                name: 'Tahoma'
            },
            {
                name: 'Times'
            },
            {
                name: 'Trebuchet MS'
            },
            {
                name: 'Verdana'
            }
        ]

        return(
            <div>
                <h4 style={{textAlign: 'left', color: 'white', margin: '30px 0px 10px 15px'}}>DISPLAY</h4>
                <div style={{backgroundColor: '#30363D', padding: '10px', margin: '0px 10px 10px 10px', borderRadius: '7px'}}>
                    <div style={{textAlign: 'left', margin: '0px 10px 10px 0px'}}>
                        <ViewType />
                        <div>
                            <div style={{marginBottom: '10px'}}>
                                <p style={{color: 'white', fontSize: '15px', margin: '0px 0px 5px 20px'}}>Background Colour</p>
                                <input type="text" defaultValue={this.props.viewDetails.backgroundColour} name="background" placeholder="Colour / Hex colour code (ex. #2D3339)" style={{width: '220px', fontSize: '12px'}} onKeyPress={this.updateDisplay}></input>
                            </div>
                            <div style={{marginBottom: '10px'}}>
                                <p style={{color: 'white', fontSize: '15px', margin: '0px 0px 5px 20px'}}>Font Colour</p>
                                <input type="text" defaultValue={this.props.viewDetails.fontColour} name="font" placeholder="Colour / Hex colour code (ex. white)" style={{width: '220px', fontSize: '12px'}} onKeyPress={this.updateDisplay}></input>
                            </div>
                            <div style={{marginBottom: '10px'}}>
                                <p style={{color: 'white', fontSize: '15px', margin: '0px 0px 5px 20px'}}>Link Tile Colour</p>
                                <input type="text" defaultValue={this.props.viewDetails.tileColour} name="tile" placeholder="Colour / Hex colour code (ex. #1F2023)" style={{width: '220px', fontSize: '12px'}} onKeyPress={this.updateDisplay}></input>
                            </div>
                            <div>
                                <p style={{color: 'white', fontSize: '15px', margin: '0px 0px 5px 20px'}}>Font Family</p>
                                <select name="fontFamily" id="fontFamily" style={{border: 'none', height: '25px', width: '228px', margin: '3px 0px 0px 20px'}} onChange={this.updateDisplay}>
                                    {fonts.map((font) => {
                                        return(
                                            <option value={font.name} selected={font.name === this.props.viewDetails.fontFamily}>{font.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      viewDetails: state.viewDetails
    }
}

export default connect(mapStateToProps)(DisplaySection);