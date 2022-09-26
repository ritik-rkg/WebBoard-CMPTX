import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  RESET_STORE
} from '../actions';
import {API,routes} from 'API';

export function login(email, password) {
  return (dispatch, getState) => {
    dispatch(loginLoading(true));
    var params = {
      email: email,
      password: password
    };
    console.log(params);
    API.post(routes.login, params)
      .then(response => {
        if (response.status == 200) {
          console.log(response);
          dispatch(loginSuccess(response.status));
        }
      })
      .catch(error => {
        // console.log(error);
        if (error.response) {
          dispatch(loginErrored(true, error.status, error.response.data.error));
        } else {
          dispatch(loginErrored(true, 50, error.message));
        }
      });
  };
}

export function loginLoading(bool) {
  return {
    type: LOGIN_LOADING,
    isLoading: bool
  };
}

export function loginErrored(bool, stat, message) {
  return {
    type: LOGIN_ERROR,
    hasErrored: bool,
    status: stat,
    errorMsg: message
  };
}

export function loginSuccess(stat) {
  return {
    type: LOGIN_SUCCESS,
    //   info: data,
    status: stat
  };
}

export function loginClear() {
  return {
    type: RESET_STORE,
    //   info: data,
    //   status: stat
  };
}