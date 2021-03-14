import '../App.css';
import React from 'react';
import { connect } from 'react-redux';
import TimeWidget from './widgets/TimeWidget';
import GreetingWidget from './widgets/GreetingWidget';
import QuoteWidget from './widgets/QuoteWidget';
import WeatherWidget from './widgets/WeatherWidget';
import AddWidget from './widgets/AddWidget';
import AudioWidget from './widgets/AudioWidget';
import SearchBarWidget from './widgets/SearchBarWidget';

class WidgetSection extends React.Component {
    render() {
        return(
            <div>
                <h4 style={{textAlign: 'left', color: 'white', margin: '30px 0px 0px 15px'}}>WIDGETS</h4>
                <AddWidget />
                {this.props.widgetDetails.widgets.map((widget) => {
                    if (widget.type === "Greeting") {
                        return(
                            <GreetingWidget widget={widget} />
                        )
                    }
                    else if (widget.type === "Time") {
                        return(
                            <TimeWidget widget={widget} />
                        )
                    }
                    else if (widget.type === "Quote") {
                        return(
                            <QuoteWidget widget={widget} />
                        )
                    }
                    else if (widget.type === "Audio") {
                        return(
                            <AudioWidget widget={widget} />
                        )
                    }
                    else if (widget.type === "Weather") {
                        return(
                            <WeatherWidget widget={widget} />
                        )
                    }
                    else if (widget.type === "Search Bar") {
                        return(
                            <SearchBarWidget widget={widget} />
                        )
                    }
                })}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      widgetDetails: state.widgetDetails
    }
}

export default connect(mapStateToProps)(WidgetSection);