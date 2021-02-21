import React from 'react';
import { updateWidget, deleteWidget } from '../../actions/widgetActions';
import { connect } from 'react-redux';

class AudioWidget extends React.Component {
    render() {
        return(
            <div style={{backgroundColor: '#2D3339', padding: '10px', margin: '0px 10px 10px 10px', borderRadius: '7px', minHeight: '20px'}}>
                <div style={{textAlign: 'left', margin: '0px 10px 20px 0px'}}>
                    <p style={{float: 'left', color: 'white', fontWeight: 'bolder'}}>{this.props.widget.type}</p>
                    <div style={{float: 'right'}}>
                        <i style={{color: 'white', cursor: 'pointer', margin: '0px 0px 0px 5px'}} class="fas fa-trash-alt" onClick={this.props.deleteWidget} id={this.props.widget.id}></i>
                    </div>
                </div>
                <select onChange={this.props.updateWidget} ref="addWidget" name="widgets" id="widgets" style={{border: 'none', height: '20px', width: '120px', margin: '3px 0px 0px 0px'}} id={this.props.widget.id}>
                    <option value="Calm" selected={this.props.widget.value === "Calm"}>Calm</option>
                    <option value="Relaxing" selected={this.props.widget.value === "Relaxing"}>Relaxing</option>
                    <option value="Inspirational" selected={this.props.widget.value === "Inspirational"}>Inspirational</option>
                </select>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      widgetDetails: state.widgetDetails
    }
}

export default connect(mapStateToProps, { updateWidget, deleteWidget })(AudioWidget);