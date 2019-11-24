import React from 'react';
import { connect } from 'react-redux';

const renderSongDetails = (song) => {
    return Object.keys(song).map((keyName, i) => {
        return <div className="item" key={i}>
            <span>{keyName} : { song[keyName] }</span>
        </div>
    })
}

const SongDetails = (props) => {
    return (
        <div className="ui list">
            { props.song !== null ? renderSongDetails(props.song) : <div></div> }
        </div>
    );
};

const mapStateToProps = state => {
    return { song: state.selectedSong }
}

export default connect(
    mapStateToProps,
)(SongDetails);