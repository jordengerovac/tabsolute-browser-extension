import '../../App.css';
import React from 'react';
import { deleteWidget } from '../../actions/widgetActions';
import { connect } from 'react-redux';
import store from '../../store';
import { UPDATE_WEATHER_WIDGET } from '../../actions/types';
import WidgetCustomization from '../customization/WidgetCustomization';

class WeatherWidget extends React.Component {
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

    getWeather = (event) => {
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
                        <i onClick={this.toggleDisplaySettings} id={this.props.widget.id} style={{color: 'white', cursor: 'pointer', margin: '0px 5px 0px 5px'}} class="fas fa-wrench"></i>
                        <i style={{color: 'white', cursor: 'pointer', margin: '0px 0px 0px 5px'}} class="fas fa-trash-alt" onClick={this.props.deleteWidget} id={this.props.widget.id}></i>
                    </div>
                </div>
                <input id={this.props.widget.id} type="text" placeholder="City" defaultValue={this.props.widget.value.split(":@:")[0]} onKeyPress={this.getWeather} style={{marginTop: '10px'}}></input>
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

export default connect(mapStateToProps, { deleteWidget })(WeatherWidget);