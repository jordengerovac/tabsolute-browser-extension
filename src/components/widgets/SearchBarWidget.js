import '../../App.css';
import React from 'react';
import { deleteWidget, updateWidget, moveWidget } from '../../actions/widgetActions';
import { connect } from 'react-redux';
import WidgetCustomization from '../customization/WidgetCustomization';

class SearchBarWidget extends React.Component {
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
            <div style={{backgroundColor: '#2D3339', padding: '10px', margin: '0px 10px 10px 10px', borderRadius: '7px', minHeight: '20px'}}>
                <div style={{textAlign: 'left', margin: '0px 10px 20px 0px'}}>
                    <p style={{float: 'left', color: 'white', fontWeight: 'bolder'}}>{this.props.widget.type}</p>
                    <div style={{float: 'right'}}>
                        <i onClick={this.props.moveWidget} id={this.props.widget.id} style={{color: 'lightgrey', cursor: 'pointer', margin: '0px 5px 0px 5px'}} className="fas fa-arrow-up"></i>
                        <i onClick={this.props.moveWidget} id={this.props.widget.id} style={{color: 'lightgrey', cursor: 'pointer', margin: '0px 5px 0px 5px'}} className="fas fa-arrow-down"></i>
                        <i onClick={this.toggleDisplaySettings} id={this.props.widget.id} style={{color: 'lightgrey', cursor: 'pointer', margin: '0px 5px 0px 5px'}} className="fas fa-wrench"></i>
                        <i style={{color: 'lightgrey', cursor: 'pointer', margin: '0px 0px 0px 5px'}} className="fas fa-trash-alt" onClick={this.props.deleteWidget} id={this.props.widget.id}></i>
                    </div>
                </div>
                <select onChange={this.props.updateWidget} style={{border: 'none', height: '20px', width: '120px', margin: '10px 0px 0px -20px'}} id={this.props.widget.id}>
                    <option value="Google" selected={this.props.widget.value === "Google"}>Google</option>
                    <option value="DuckDuckGo" selected={this.props.widget.value === "DuckDuckGo"}>DuckDuckGo</option>
                    <option value="Bing" selected={this.props.widget.value === "Bing"}>Bing</option>
                    <option value="Qwant" selected={this.props.widget.value === "Qwant"}>Qwant</option>
                </select>
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

export default connect(mapStateToProps, { deleteWidget, updateWidget, moveWidget })(SearchBarWidget);