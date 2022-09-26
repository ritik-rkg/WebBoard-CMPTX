import {
  LOGOUT_LOADING,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  RESET_STORE
} from '../actions';

import {API,routes} from 'API';
// import Cookies from 'js-cookie';
import {Cookies} from 'react-cookie';

const cookies = new Cookies();


export function logout() {
  return (dispatch, getState) => {
    dispatch(logoutLoading(true));
    console.log(cookies.getAll());
    // Cookies.set('session', '', {domain:"app.webboard.in"})
    cookies.remove('session',{path:"/",domain:".webboard.in"});
    console.log(document.cookie);
    // console.log(Cookies.get("session"));
    
    // API.get(routes.logout)
      // .then(response => {
        // if (response.status == 200) {
          dispatch(logoutSuccess(200));
        // }
      // })
      // .catch(error => {
        // console.log(error);
        // if (error.response) {
          // dispatch(logoutErrored(true, error.status, error.response.data.error));
        // } else {
          // dispatch(logoutErrored(true, 50, error.message));
        // }
      // });
  };
}

export function logoutLoading(bool) {
  return {
    type: LOGOUT_LOADING,
    isLoading: bool
  };
}

export function logoutErrored(bool, stat, message) {
  return {
    type: LOGOUT_ERROR,
    hasErrored: bool,
    status: stat,
    errorMsg: message
  };
}

export function logoutSuccess(stat) {
  return {
    type: LOGOUT_SUCCESS,
    status: stat
  };
}

export function logoutClear() {
  return {
    type: RESET_STORE,
  };
}