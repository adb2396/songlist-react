import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>,
    document.querySelector('#root')
);

