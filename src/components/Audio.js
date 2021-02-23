import React from 'react';
import ReactHowler from 'react-howler';
import adventure from '../audio/adventure.mp3'
import newdawn from '../audio/newdawn.mp3'
import onceagain from '../audio/onceagain.mp3'
import pianomoment from '../audio/pianomoment.mp3'
import slowmotion from '../audio/slowmotion.mp3'
import tomorrow from '../audio/tomorrow.mp3'

class Audio extends React.Component {
    render() {
        var song = "";
        if (this.props.widget.value === "Adventure") {
            song = adventure;
        }
        else if (this.props.widget.value === "New Dawn") {
            song = newdawn;
        }
        else if (this.props.widget.value === "Once Again") {
            song = onceagain;
        }
        else if (this.props.widget.value === "Piano Moment") {
            song = pianomoment;
        }
        else if (this.props.widget.value === "Slow Motion") {
            song = slowmotion;
        }
        else if (this.props.widget.value === "Tomorrow") {
            song = tomorrow;
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