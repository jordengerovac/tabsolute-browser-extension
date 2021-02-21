import '../App.css';
import React from 'react';
import { updateWidget } from '../actions/widgetActions';
import { connect } from 'react-redux';

class Quote extends React.Component {
    constructor() {
        super();
        this.state = {
            quoteText: "",
            quoteAuthor: ""
        }
    }
    
    getRandomQuote = () => {
        fetch('https://type.fit/api/quotes')
          .then(res => res.json())
          .then(
          (result) => {
            var random_num = Math.floor(Math.random() * result.length);
            var text = result[random_num].text;
            var author = result[random_num].author
            if (author === null)
                author = "Unknown";
            this.setState({
                quoteText: text,
                quoteAuthor: author
            })
        })
    }

    componentDidMount() {
        this.getRandomQuote();
    }
      

    render() {
        return (
            <div>
                <p style={{fontSize: '20px'}}>{this.state.quoteText}</p>
                <p style={{fontSize: '20px'}}>- {this.state.quoteAuthor}</p>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      widgetDetails: state.widgetDetails
    }
}

export default connect(mapStateToProps, { updateWidget })(Quote);