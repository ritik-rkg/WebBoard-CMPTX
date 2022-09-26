import React from 'react';
import ReactDOM from "react-dom/client";
// import {store} from 'store';
import { Provider } from 'react-redux'
// Service worker
import * as serviceWorker from './common/serviceWorker';
import configureStore from './configureStore'

// App
import App from './App';

var store = configureStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

serviceWorker.unregister();
