import React from 'react';
import ReactHowler from 'react-howler';
import Inspirational from '../audio/inspiration.mp3'
import Calm from '../audio/calming.mp3'
import Relaxing from '../audio/relaxing.mp3'

class Audio extends React.Component {
    render() {
        var song = "";
        if (this.props.widget.value === "Inspirational") {
            song = Inspirational;
        }
        else if (this.props.widget.value === "Calm") {
            song = Calm;
        }
        else if (this.props.widget.value === "Relaxing") {
            song = Relaxing;
        }
        return(
            <div>
                <ReactHowler 
                    src={song}
                    playing={true}
                    volume={0.1}
                />
            </div>
        )
    }
}

export default Audio;