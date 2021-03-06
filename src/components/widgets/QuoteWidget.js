import '../../App.css';
import React from 'react';
import { deleteWidget, moveWidget } from '../../actions/widgetActions';
import { connect } from 'react-redux';
import WidgetCustomization from '../customization/WidgetCustomization';

class QuoteWidget extends React.Component {
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
                        <i onClick={this.toggleDisplaySettings} id={this.props.widget.id} style={{color: 'lightgrey', cursor: 'pointer', margin: '0px 5px 0px 5px'}} class="fas fa-wrench"></i>
                        <i style={{color: 'lightgrey', cursor: 'pointer', margin: '0px 0px 0px 5px'}} class="fas fa-trash-alt" onClick={this.props.deleteWidget} id={this.props.widget.id}></i>
                    </div>
                </div>
                {/*<p style={{color: 'white', fontSize: '11px', marginTop: '25px'}}>Quotes are retrieved from https://type.fit/api/quotes</p>*/}
                <p style={{color: 'white', fontSize: '11px', margin: '25px 0px 0px -10px'}}>Quote of the day retrieved from https://goquotes.docs.apiary.io</p>
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

export default connect(mapStateToProps, { deleteWidget, moveWidget })(QuoteWidget);