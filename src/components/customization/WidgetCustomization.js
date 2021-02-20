import '../../App.css';
import React from 'react';
import { UPDATE_WIDGET_FONT } from '../../actions/types';
import store from '../../store';

class WidgetCustomization extends React.Component {
    updateWidgetFont = (event) => {
        if (event.key === "Enter" ) {
            const payload = {
                type: UPDATE_WIDGET_FONT,
                payload: event.target.value,
                id: this.props.widget.id
            }
            store.dispatch(payload);
        }
    }

    render() {
        return(
            <div style={{textAlign: 'left'}}>
                <div style={{backgroundColor: '#2D3339', padding: '10px', borderRadius: '7px'}}>
                    <div style={{textAlign: 'left', margin: '0px 10px 0px 0px', display: 'flex'}}>
                        <p style={{float: 'left', color: 'white'}}>Font Size</p>
                        <input type="text" style={{width: '70px'}} onKeyPress={this.updateWidgetFont} id={this.props.widget.id} defaultValue={this.props.widget.display.font}></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default WidgetCustomization;