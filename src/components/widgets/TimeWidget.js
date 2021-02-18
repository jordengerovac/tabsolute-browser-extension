import '../../App.css';
import React from 'react';
import { deleteWidget } from '../../actions/widgetActions';
import { connect } from 'react-redux';

class TimeWidget extends React.Component {
    render() {
        var inputId = "clocktype" + String(this.props.widget.id)
        return (
            <div style={{backgroundColor: '#30363D', padding: '10px', margin: '0px 10px 10px 10px', borderRadius: '7px'}}>
                <div style={{textAlign: 'left', margin: '0px 10px 10px 0px'}}>
                    <p style={{float: 'left', color: 'white', fontWeight: 'bolder'}}>{this.props.widget.type}</p>
                    <div style={{float: 'right'}}>
                        <i onClick={this.props.toggleDisplaySettings} id={this.props.widget.id} style={{color: 'white', cursor: 'pointer', margin: '0px 5px 0px 5px'}} class="fas fa-wrench"></i>
                        <i style={{color: 'white', cursor: 'pointer', margin: '0px 0px 0px 5px'}} class="fas fa-trash-alt" onClick={this.props.deleteWidget} id={this.props.widget.id}></i>
                    </div>
                </div>
                <fieldset id={inputId} style={{border: 'none', display: 'flex', color: 'white', justifyContent: 'center'}}>
                    <label>12-hour</label>
                    <input style={{marginTop: '10px'}} type="radio" value="12" onChange={this.props.handleClockChange} id={this.props.widget.id} name={inputId} defaultChecked={this.props.widget.value === "12"}></input>
                    <label>24-hour</label>
                    <input style={{marginTop: '10px'}} type="radio" value="24" onChange={this.props.handleClockChange} id={this.props.widget.id} name={inputId} defaultChecked={this.props.widget.value !== "12"}></input>
                </fieldset>
                {/*
                {this.props.widget.display.customizationVisible === "true" ? <WidgetCustomization handleFontChange={this.props.handleFontChange} widget={this.props.widget} /> : null}
                */}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      widgetDetails: state.widgetDetails
    }
}

export default connect(mapStateToProps, { deleteWidget })(TimeWidget);