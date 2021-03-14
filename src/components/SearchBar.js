import '../App.css';
import React from 'react';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: ''
        }
    }

    executeSearch = (event) => {
        if (event.key === 'Enter') {
            var url = "";
            if (this.props.widget.value === 'Google') {
                url = "https://www.google.com/search?q=" + this.state.searchText
            }
            else if (this.props.widget.value === 'DuckDuckGo') {
                url = "https://www.duckduckgo.com/?q=" + this.state.searchText
            }
            else if (this.props.widget.value === 'Bing') {
                url = "https://www.bing.com/?q=" + this.state.searchText
            }
            else if (this.props.widget.value === 'Qwant') {
                url = "https://www.qwant.com/?q=" + this.state.searchText
            }
            window.open(url, "_self");
        }
    }

    handleChange = (event) => {
        this.setState({
            searchText: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input className="search-bar" style={{marginTop: '10px', border: '1px solid ' + this.props.viewDetails.fontColour, width: '475px', fontSize: this.props.widget.display.font + 'px', height: this.props.widget.display.font + 'px', backgroundColor: 'rgba(0,0,0,0.1)', padding: '10px', borderRadius: '100px', color: this.props.viewDetails.fontColour, fontFamily: 'inherit'}} type="text" value={this.props.widget.value} onChange={this.handleChange} id={this.props.widget.id} value={this.state.searchText} onKeyPress={this.executeSearch}></input>
                <i style={{color: this.props.viewDetails.fontColour, margin: '0px 0px 0px -15px', fontSize: this.props.widget.display.font + 'px'}} className="fas fa-search"></i>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      viewDetails: state.viewDetails,
      widgetDetails: state.widgetDetails
    }
  }

export default connect(mapStateToProps)(SearchBar);