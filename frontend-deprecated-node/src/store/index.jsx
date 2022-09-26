import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
// import {} from 'react-redux';

import reducers from 'reducers';

export const store = createStore(
    combineReducers({
        state: reducers
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// Service worker
// import * as serviceWorker from './common/serviceWorker';

// App
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
