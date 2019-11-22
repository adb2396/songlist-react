import React from 'react';
import { connect } from 'react-redux';

const renderList = () => {
    return 
}

const SongList = () => {
    return (
        <div className="ui list">
            SongList
        </div>
    );
};

const mapStateToProps = state => {
    return { songs: state.songs };
}

export default connect(
    mapStateToProps
)(SongList);