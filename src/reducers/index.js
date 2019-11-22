import { combineReducers } from 'redux';

import songListReducer from './songListReducer';
import selectedSongReducer from './selectedSongReducer';

export default combineReducers({
    songs: songListReducer,
    selectedSong: selectedSongReducer
});