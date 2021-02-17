import '../../App.css';
import React from 'react';

class WidgetCustomization extends React.Component {
    render() {
        return(
            <div style={{textAlign: 'left'}}>
                <div style={{backgroundColor: '#30363D', padding: '10px', borderRadius: '7px'}}>
                    <div style={{textAlign: 'left', margin: '0px 10px 0px 0px', display: 'flex'}}>
                        <p style={{float: 'left', color: 'white'}}>Font Size</p>
                        <input type="text" style={{width: '70px'}} onKeyPress={this.props.handleFontChange} id={this.props.widget.id} value={this.props.widget.display.font}></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default WidgetCustomization;