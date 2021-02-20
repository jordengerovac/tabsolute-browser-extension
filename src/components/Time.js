import '../App.css';
import React from 'react';

class Time extends React.Component {
    constructor() {
        super();
        this.state = {
            currentTime: new Date()
        }
    }

    tick = () => {
        this.setState({
            currentTime: new Date()
        });
    }

    componentDidMount() {
        setInterval(() => {
            this.tick();
          }, 1000);
    }

    render() {
        var ampm = this.state.currentTime.getHours() >= 12 ? 'PM' : 'AM';
        if (this.props.widget.value === "12")
            return (<h1 style={{margin: '0', fontSize: this.props.widget.display.font + 'px'}}>{this.state.currentTime.toLocaleTimeString().split(":")[0]}:{this.state.currentTime.toLocaleTimeString().split(":")[1]} {ampm}</h1>)
        else
            return (<h1 style={{margin: '0', fontSize: this.props.widget.display.font + 'px'}}>{this.state.currentTime.toTimeString().split(":")[0]}:{this.state.currentTime.toTimeString().split(":")[1]}</h1>)
    }
}

export default Time;