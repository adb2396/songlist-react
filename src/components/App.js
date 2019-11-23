import React from 'react';

import SongList from './SongList';
import SongDetails from './SongDetails';

const App = () => {
    return (
        <div className="ui grid container">
            <div className="row">
                <div className="eight width column">
                    <SongList />
                </div>
                <div className="eight width column">
                    <SongDetails />
                </div>
            </div>
        </div>
    );
};

export default App;