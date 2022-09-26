import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'remote-redux-devtools';


export default function configureStore() {
  var store = createStore(
    rootReducer, 
    applyMiddleware(thunk,logger),
  );
  // let store = createStore(rootReducer,applyMiddleware(thunk))
  return store
}