import {
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  RESET_STORE
} from '../actions';
import {API,routes} from 'API';

export function signup(username, name, email, password) {
  return (dispatch, getState) => {
    dispatch(signupLoading(true));
    var params = JSON.stringify({
      username:username,
      name: name,
      email: email,
      password: password
    });
    console.log(params);
    API.post(routes.signup, params)
      .then(response => {
        console.log(response);
        if (response.status === 201) {
          dispatch(signupSuccess(response.status));
        }
      })
      .catch(error => {
        if (error.response) {
          dispatch(signupErrored(true, error.status, error.response.data.error));
        } else {
          // console.log(error);
          dispatch(signupErrored(true, 50, error.message));
        }
      });
  };
}

export function signupLoading(bool) {
  return {
    type: SIGNUP_LOADING,
    isLoading: bool
  };
}

export function signupErrored(bool, stat, message) {
  return {
    type: SIGNUP_ERROR,
    hasErrored: bool,
    status: stat,
    errorMsg: message
  };
}

export function signupSuccess(stat) {
  return {
    type: SIGNUP_SUCCESS,
      // info: data,
    status: stat
  };
}

export function signupClear() {
  return {
    type: RESET_STORE,
    //   info: data,
    //   status: stat
  };
}