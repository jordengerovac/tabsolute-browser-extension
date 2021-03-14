import '../App.css';
import React from 'react';
import { updateWidget } from '../actions/widgetActions';
import { connect } from 'react-redux';
import store from '../store';
import { UPDATE_QUOTE_WIDGET } from '../actions/types';

class Quote extends React.Component {
    constructor() {
        super();
        this.state = {
            quoteText: "",
            quoteAuthor: "",
            day: ""
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
        .catch(function(error) {
            console.log(error);
        });
    }

    getRandomQuoteTwo = () => {
        fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
          .then(res => res.json())
          .then(
          (result) => {
            var text = result.quotes[0].text;
            var author = result.quotes[0].author;
            var day = new Date().getDay();
            if (author === null)
                author = "Unknown";
            var value = text + ":@:" + author + ":@:" + day
            this.setState({
                quoteText: text,
                quoteAuthor: author
            })
            var payload = {
                type: UPDATE_QUOTE_WIDGET,
                payload: value,
                id: this.props.widget.id
            }
            store.dispatch(payload);
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    componentDidMount() {
        if (parseInt(this.props.widget.value.split(":@:")[2]) !== new Date().getDay()) {
            this.getRandomQuoteTwo();
        }
    } 

    render() {
        return (
            <div>
                <p style={{fontSize: '20px'}}>{this.props.widget.value.split(":@:")[0]}</p>
                <p style={{fontSize: '20px'}}>- {this.props.widget.value.split(":@:")[1]}</p>
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