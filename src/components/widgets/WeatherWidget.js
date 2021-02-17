import '../../App.css';
import React from 'react';

class WeatherWidget extends React.Component {
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
                    <i className={icon}  style={{color: 'white', fontSize: '40px'}}></i>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <p style={{margin: '6px'}}>{parseInt(this.props.widget.value.split(":@:")[1])}</p>
                        <p style={{margin: '6px'}}>{parseInt(this.props.widget.value.split(":@:")[2])}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherWidget;