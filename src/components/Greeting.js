import '../App.css';
import React from 'react';

class Greeting extends React.Component {
    render() {
        const current_time = new Date();
        var greeting = "";
        if (current_time.getHours() >= 21) {
        greeting = "night";
        }
        else if (current_time.getHours() >= 18) {
        greeting = "evening";
        }
        else if (current_time.getHours() >= 12) {
        greeting = "afternoon"
        }
        else {
        greeting = "morning"
        }
        if (this.props.widget.value !== "") 
            return (<h3 style={{margin: '0', fontSize: this.props.widget.display.font + 'px'}}>Good {greeting}, {this.props.widget.value}</h3>)
        
        else 
            return (<h3 style={{margin: '0', color: '', fontSize: this.props.widget.display.font + 'px'}}>Good {greeting}</h3>)
    }
}

export default Greeting;