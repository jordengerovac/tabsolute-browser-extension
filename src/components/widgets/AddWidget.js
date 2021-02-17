import React from 'react';

class AddWidget extends React.Component {
    render() {
        return(
            <div style={{padding: '10px', display: "flex", textAlign: 'left', margin: '20px 10px 10px 10px', backgroundColor: '#30363D', borderRadius: '7px'}}>
                <p style={{color: 'white', fontWeight: 'bolder', marginTop: '3px'}}>Add Widget:</p>
                <form onSubmit={this.props.addNewWidget} style={{marginLeft: '15px'}}>
                    <div style={{display: 'flex'}}>
                        <select ref="addWidget" name="widgets" id="widgets" style={{border: 'none', height: '20px', width: '120px', margin: '3px 0px 0px 0px'}}>
                            <option selected disabled>Select Widget</option>
                            <option value="Greeting">Greeting</option>
                            <option value="Time">Time</option>
                            <option value="Quote">Quote</option>
                            <option value="Weather">Weather</option>
                        </select>
                        <button type="submit" style={{backgroundColor: '#0bb508', border: 'none', borderRadius: '10%', fontSize: '15px', margin: '2px 0px 0px 18px', color: 'white', height: '25px', width: '25px', paddingBottom: '2px', cursor: 'pointer'}}>+</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddWidget;