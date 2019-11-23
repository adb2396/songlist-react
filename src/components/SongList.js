import React from 'react';
import { connect } from 'react-redux';
import { selectedSong } from '../actions/index';

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map(( song, i ) => {
            return (
                <div className="item" key={i}>
                    <div className="content">
                        <div className="header">{ song.title }</div>
                        <div className="description">{ song.description }</div>
                    </div>
                    <div className="right floated content">
                        <button 
                            onClick={ () => this.props.selectedSong(song) }
                            className="ui button primary"
                        >
                            Select
                        </button>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui divided list">
                { this.renderList() }
            </div>
        );
    }
};

const mapStateToProps = state => {
    return { songs: state.songs };
}

export default connect(
    mapStateToProps,
    { selectedSong }
)(SongList);