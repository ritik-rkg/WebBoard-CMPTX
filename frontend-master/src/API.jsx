import axios from "axios";

var apivar = axios.create({
  baseURL: "http://127.0.0.1:5000",
  // baseURL: "http://192.168.1.5:5000",
  // baseURL: "https://app.webboard.in/api",
  responseType: "json",
  withCredentials: true,
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },
  headers: {
      'Content-Type': 'application/json',
  },
});

// apivar.defaults.headers.common = {
//   'Content-Type': 'application/json',
// }

//These are the backend/API routes and *not* frontend routes

var routes = {
  home : '/',
  dashboard : '/user/details',
  help : '/help',
  login : '/user/sign_in',
  logout: '/user/sign_out',
  signup : '/user/sign_up',
  settings : '/settings',
  follow : '/follow',   //followers (both course and user)
  explore : '/explore',  //explore other courses
  404 : '/not-found',
  nopage : '/under-development',
  courselist : '/courses',  //list of courses you've made
  courseInfo : '/course/:courseid',  //getting course info
  userInfo : '/user/:userid',    //getting user info
  createBoard: '/board'
};

export {apivar as API, routes}