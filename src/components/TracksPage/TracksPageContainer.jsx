import React from 'react';
import {connect} from "react-redux";
import TracksPage from "./TracksPage";
import {showTracks} from "../../redux/tracks-reducer";

class TracksPageContainer extends React.Component {

    //componentDidMount() { }

    render() {
        return <TracksPage tracks={this.props.tracks} />
    }
}



let mapStateToProps = (state) => {
    return {
        tracks: state.tracksPage.tracks,
    }
}

export default connect(
    mapStateToProps, {showTracks}
)(TracksPageContainer);