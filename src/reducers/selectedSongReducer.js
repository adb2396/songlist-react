export default (selectedSong=null, action) => {
    switch(action.type) {
        case 'SONG_SELECT':
            return action.payload
        default: 
            return selectedSong
    }
}