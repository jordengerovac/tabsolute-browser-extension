import React from 'react';

class ViewType extends React.Component {
    render() {
        return(
            <div style={{margin: '20px 0px 20px 0px'}}>
                <fieldset name="view" style={{border: "none", display: 'flex', color: 'white', margin: 'auto', justifyContent: 'center'}}>
                    <label style={{margin: '0'}}>Dashboard</label>
                    <input type="radio" value="dashboard" name="view" style={{marginRight: '25px'}} onChange={this.props.toggleView} defaultChecked={this.props.viewType === "dashboard"}></input>
                    <label>Link Tiles</label>
                    <input value="tile" type="radio" name="view" onChange={this.props.toggleView} defaultChecked={this.props.viewType === "tile"}></input>
                </fieldset>
            </div>
        )
    }
}

export default ViewType;