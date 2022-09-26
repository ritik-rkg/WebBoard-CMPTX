import React from 'react';
import ReactDOM from 'react-dom';
// import {store} from 'store';
import {Provider} from 'react-redux'
// Service worker
import * as serviceWorker from './common/serviceWorker';
import configureStore from './configureStore'

// App
import App from './App';


var store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

serviceWorker.unregister();
