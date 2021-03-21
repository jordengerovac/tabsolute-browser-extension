import '../App.css';
import React from 'react';
import { connect } from 'react-redux';

class PhotoCredits extends React.Component {
    render() {
        return (
            <div>
                {this.props.photoDetails.photoVisible && !this.props.photoDetails.loading ? <div style={{position: 'absolute', bottom: '5px', right: '5px', color: this.props.viewDetails.fontColour, fontSize: '14px', zIndex: '1'}}>
                <p><a style={{color: this.props.viewDetails.fontColour}} href={this.props.photoDetails.currentPhoto.links.html + "/?utm_source=tabsolute&utm_medium=referral"}>Photo</a> by <a style={{color: this.props.viewDetails.fontColour}} href={this.props.photoDetails.currentPhoto.user.links.html + "/?utm_source=tabsolute&utm_medium=referral"}>{this.props.photoDetails.currentPhoto.user.first_name} {this.props.photoDetails.currentPhoto.user.last_name}</a> on <a style={{color: this.props.viewDetails.fontColour}} href="https://unsplash.com/?utm_source=tabsolute&utm_medium=referral">Unsplash</a></p>
                </div> : null}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      photoDetails: state.photoDetails,
      viewDetails: state.viewDetails
    }
}

export default connect(mapStateToProps)(PhotoCredits);