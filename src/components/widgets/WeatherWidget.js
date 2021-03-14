import '../../App.css';
import React from 'react';
import { deleteWidget, moveWidget } from '../../actions/widgetActions';
import { connect } from 'react-redux';
import store from '../../store';
import { UPDATE_WEATHER_WIDGET } from '../../actions/types';
import WidgetCustomization from '../customization/WidgetCustomization';

class WeatherWidget extends React.Component {
    constructor() {
        super();
        this.state = {
            displaySettingsVisible: false,
            weatherText: ""
        }
    }

    toggleDisplaySettings = () => {
        this.setState({
            displaySettingsVisible: !this.state.displaySettingsVisible
        })
    }

    handleChange = (event) => {
        this.setState({
            weatherText: event.target.value
        })
    }

    getWeather = (event) => {
        //event.preventDefault();
        if (event.key === "Enter") {
            const WEATHER_API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + event.target.value + '&units=metric&appid=' + WEATHER_API_KEY)
            .then(res => res.json())
            .then(
            (result) => {
                var city = event.target.value;
                var temp_min = result.main.temp_min;
                var temp_max = result.main.temp_max;
                var clouds = result.weather[0].description;
                var value = city + ":@:" + temp_min + ":@:" + temp_max + ":@:" + clouds;
                
                var payload = {
                    type: UPDATE_WEATHER_WIDGET,
                    payload: value,
                    id: this.props.widget.id
                }
                store.dispatch(payload);
                this.setState({
                    weatherText: ""
                })
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    }

    render() {
        return(
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
                <input id={this.props.widget.id} type="text" placeholder={this.props.widget.value.split(":@:")[0] ? this.props.widget.value.split(":@:")[0] : "City"} value={this.state.weatherText} onKeyPress={this.getWeather} style={{marginTop: '10px'}} onChange={this.handleChange}></input>
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

export default connect(mapStateToProps, { deleteWidget, moveWidget })(WeatherWidget);