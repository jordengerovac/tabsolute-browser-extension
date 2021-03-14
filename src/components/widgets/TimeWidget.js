import '../../App.css';
import React from 'react';
import { deleteWidget, updateWidget, moveWidget } from '../../actions/widgetActions';
import { connect } from 'react-redux';
import WidgetCustomization from '../customization/WidgetCustomization';

class TimeWidget extends React.Component {
    constructor() {
        super();
        this.state = {
            displaySettingsVisible: false
        }
    }

    toggleDisplaySettings = () => {
        this.setState({
            displaySettingsVisible: !this.state.displaySettingsVisible
        })
    }

    render() {
        var inputId = String(this.props.widget.id)
        return (
            <div style={{backgroundColor: '#2D3339', padding: '10px', margin: '0px 10px 10px 10px', borderRadius: '7px'}}>
                <div style={{textAlign: 'left', margin: '0px 10px 10px 0px'}}>
                    <p style={{float: 'left', color: 'white', fontWeight: 'bolder'}}>{this.props.widget.type}</p>
                    <div style={{float: 'right'}}>
                        <i onClick={this.props.moveWidget} id={this.props.widget.id} style={{color: 'lightgrey', cursor: 'pointer', margin: '0px 5px 0px 5px'}} className="fas fa-arrow-up"></i>
                        <i onClick={this.props.moveWidget} id={this.props.widget.id} style={{color: 'lightgrey', cursor: 'pointer', margin: '0px 5px 0px 5px'}} className="fas fa-arrow-down"></i>
                        <i onClick={this.toggleDisplaySettings} id={this.props.widget.id} style={{color: 'lightgrey', cursor: 'pointer', margin: '0px 5px 0px 5px'}} class="fas fa-wrench"></i>
                        <i style={{color: 'lightgrey', cursor: 'pointer', margin: '0px 0px 0px 5px'}} class="fas fa-trash-alt" onClick={this.props.deleteWidget} id={this.props.widget.id}></i>
                    </div>
                </div>
                <form id={inputId} style={{border: 'none', display: 'flex', color: 'white', justifyContent: 'center', margin: '25px 0px 0px -10px'}}>
                    <label>12-hour</label>
                    <input style={{marginTop: '10px'}} type="radio" value="12" onChange={this.props.updateWidget} id={this.props.widget.id} name={inputId} checked={this.props.widget.value === "12"}></input>
                    <label>24-hour</label>
                    <input style={{marginTop: '10px'}} type="radio" value="24" onChange={this.props.updateWidget} id={this.props.widget.id} name={inputId} checked={this.props.widget.value === "24"}></input>
                </form>
                {this.state.displaySettingsVisible ? <WidgetCustomization widget={this.props.widget} /> : null}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      widgetDetails: state.widgetDetails
    }
}

export default connect(mapStateToProps, { deleteWidget, updateWidget, moveWidget })(TimeWidget);