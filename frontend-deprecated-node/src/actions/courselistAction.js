import {
  GET_USER_COURSES_SUCCESS,
  GET_USER_COURSES_ERRORED,
  GET_USER_COURSES_LOADING,
} from '../actions';
import {API,routes} from 'API';

export function getUserCourses() {
  return (dispatch, getState) => {
    dispatch(userCoursesLoading(true));
    API.get(routes.courselist)
      .then(response => {
        if(response.status == 200) {
          dispatch(userCoursesSuccess(response.data,response.status));
        }
      })
      .catch(error => {
        if(error.response){
          dispatch(userCoursesErrored(true,error.status));
        }
        else{
          dispatch(userCoursesErrored(true,50));
        }
      });
  };
}

export function userCoursesLoading(bool) {
  return {
    type: GET_USER_COURSES_LOADING,
    isLoading: bool
  };
}

export function userCoursesErrored(bool,stat) {
  return {
    type: GET_USER_COURSES_ERRORED,
    hasErrored: bool,
    status: stat
  };
}

export function userCoursesSuccess(data,stat) {
  return {
    type: GET_USER_COURSES_SUCCESS,
    courselist: data,
    status: stat
  };
}
