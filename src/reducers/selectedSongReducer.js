export default (selectedSong=null, action) => {
    switch(action.type) {
        case 'SELECTED_SONG':
            return action.payload
        default: 
            return selectedSong
    }
}