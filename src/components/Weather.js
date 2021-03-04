import '../App.css';
import React from 'react';
import store from '../store';
import { UPDATE_WEATHER_WIDGET } from '../actions/types';

class Weather extends React.Component {
    componentDidMount() {
        if (this.props.widget.value !== "")
            this.getWeather();
    }

    getWeather() {
        const WEATHER_API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.props.widget.value.split(":@:")[0] + '&units=metric&appid=' + WEATHER_API_KEY)
        .then(res => res.json())
        .then(
        (result) => {
            var city = this.props.widget.value.split(":@:")[0];
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

    render() {
        var clouds = String(this.props.widget.value.split(":@:")[3]);
        var icon = "";
        if (clouds.includes("rain")) {
            icon = "fas fa-cloud-rain";
        }
        else if (clouds.includes("snow")) {
            icon = "fas fa-snowflake";
        }
        else if (clouds.includes("clouds")) {
            icon = "fas fa-cloud";
        }
        else if (clouds.includes("clear")) {
            icon = "fas fa-sun";
        }
        else {
            icon = "fas fa-smog";
        }
        return(
            <div style={{textAlign: 'right', margin: '7px', fontSize: this.props.widget.display.font + 'px'}}>
                <p>{this.props.widget.value.split(":@:")[0]}</p>
                <div>
                    <i className={icon}  style={{fontSize: '40px'}}></i>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <p style={{margin: '6px'}}>{parseInt(this.props.widget.value.split(":@:")[1])}</p>
                        <p style={{margin: '6px'}}>{parseInt(this.props.widget.value.split(":@:")[2])}</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Weather;