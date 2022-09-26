import { combineReducers } from 'redux'
import {RESET_REDUX_STORE_DELETE} from '../actions'
import dashboardReducer from './dashboardReducer'
import signupReducer from './signupReducer'
import loginReducer from './loginReducer'
import logoutReducer from './logoutReducer'

const appReducer = combineReducers({
    dashboard : dashboardReducer,
    signup : signupReducer,
    login : loginReducer,
    logout: logoutReducer,

})


const rootReducer = (state, action) => {
    if(action.type===RESET_REDUX_STORE_DELETE){
        state = undefined;
    }
    return appReducer(state, action)
  }

export default rootReducer;
