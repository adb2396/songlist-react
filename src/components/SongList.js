import React from 'react';
import { connect } from 'react-redux';

const renderList = (songs) => {
    return songs.map(( song ) => {
        return (
            <div className="item">
                <div className="content">
                    <div className="header">{ song.title }</div>
                    <div className="description">{ song.description }</div>
                </div>
                <button className="ui button primary right floated">Select</button>
            </div>
        );
    });
}

const SongList = (props) => {
    return (
        <div className="ui relaxed divided list">
            { renderList(props.songs) }
        </div>
    );
};

const mapStateToProps = state => {
    return { songs: state.songs };
}

export default connect(
    mapStateToProps
)(SongList);