import '../App.css';
import React from 'react';

class Greeting extends React.Component {
    render() {
        return (
            <div>
                <p style={{fontSize: '80px'}}>Hello {this.props.value}</p>
            </div>
        )
    }
}

export default Greeting;