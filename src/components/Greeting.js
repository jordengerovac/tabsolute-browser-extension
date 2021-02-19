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
        return (
            <div>
                <p style={{fontSize: '65px'}}>Good {greeting}, {this.props.widget.value}</p>
            </div>
        )
    }
}

export default Greeting;