import {
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_LOADING,
  GET_USER_INFO_ERRORED
} from '../actions';
import {API,routes} from 'API';

export function getUserInfo() {
  return (dispatch, getState) => {
    dispatch(userInfoLoading(true));
    API.get(routes.dashboard)
      .then(response => {
        if(response.status == 200) {
          localStorage.setItem('isAuthenticated', true);
          dispatch(userInfoSuccess(response.data,response.status));
        }
      })
      .catch(error => {
        localStorage.setItem('isAuthenticated', false);
        if(error.response){
          dispatch(userInfoErrored(true,error.status));
        }
        else{
          dispatch(userInfoErrored(true,50));
        }
      });
  };
}

export function userInfoLoading(bool) {
  return {
    type: GET_USER_INFO_LOADING,
    isLoading: bool
  };
}

export function userInfoErrored(bool,stat) {
  return {
    type: GET_USER_INFO_ERRORED,
    hasErrored: bool,
    status: stat
  };
}

export function userInfoSuccess(data,stat) {
  return {
    type: GET_USER_INFO_SUCCESS,
    info: data,
    status: stat
  };
}
