import '../../App.css';
import React from 'react';
import { deleteWidget, updateWidget } from '../../actions/widgetActions';
import { connect } from 'react-redux';
import WidgetCustomization from '../customization/WidgetCustomization';

class GreetingWidget extends React.Component {
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
        return (
            <div style={{backgroundColor: '#2D3339', padding: '10px', margin: '0px 10px 10px 10px', borderRadius: '7px'}}>
                <div style={{textAlign: 'left', margin: '0px 10px 10px 0px'}}>
                    <p style={{float: 'left', color: 'white', fontWeight: 'bolder'}}>{this.props.widget.type}</p>
                    <div style={{float: 'right'}}>
                        <i onClick={this.toggleDisplaySettings} id={this.props.widget.id} style={{color: 'white', cursor: 'pointer', margin: '0px 5px 0px 5px'}} class="fas fa-wrench"></i>
                        <i style={{color: 'white', cursor: 'pointer', margin: '0px 0px 0px 5px'}} class="fas fa-trash-alt" onClick={this.props.deleteWidget} id={this.props.widget.id}></i>
                    </div>
                </div>
                <input style={{marginTop: '10px'}} type="text" defaultValue={this.props.widget.value} onChange={this.props.updateWidget} id={this.props.widget.id} placeholder="Name"></input>
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

export default connect(mapStateToProps, { deleteWidget, updateWidget })(GreetingWidget);