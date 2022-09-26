import React, { Component,lazy, Suspense  } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Dashboard from './views/Dashboard';
import Courses from './views/Course';
import UserList from './views/UserList';
// import Typography from './views/Typography';
// import Icons from './views/Icons';
import Account from './views/Account';
import Settings from './views/Settings';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import SignOut from './views/SignOut';
import UnderDevelopment from './views/UnderDevelopment';
import NotFound from './views/NotFound';
import Landing from './views/Landing';
import Help from './views/Help';
import About from './views/About';
// import Explore from './views/Explore';
// import Course from './views/Course';
// import Home from './views/Home';
import Profile from './views/Profile';
import Loader from 'components/Loader'

// const Account = lazy(() => import('./views/Account'));
// const Settings = lazy(() => import('./views/Settings'));
// const UserList = lazy(() => import('./views/UserList'));
// const Courses = lazy(() => import('./views/Course'));


export default class Routes extends Component {
  render() {
    return (
      <Suspense flassback={Loader}>
      <Switch>
        <Route
          component={Landing}
          exact
          path="/"
        />
        <Route
          component={Help}
          exact
          path="/help"
        />
        <Route
          component={About}
          exact
          path="/about"
        />
        <Route
          component={Dashboard}
          exact
          path="/dashboard"
        />
        <Route
          component={UserList}
          exact
          path="/follow"
        />
        {/* <Route
          component={Explore}
          exact
          path="/explore"
        /> */}
        <Route
          component={Courses}
          exact
          path="/course"
        />
        {/* <Route
          component={Typography}
          exact
          path="/typography"
        />
        <Route
          component={Icons}
          exact
          path="/icons"
        /> */}
        <Route
          component={Account}
          exact
          path="/settings"
        />
        <Route
          component={Settings}
          exact
          path="/account"
        />
        <Route
          component={SignUp}
          exact
          path="/sign-up"
        />
        <Route
          component={SignIn}
          exact
          path="/sign-in"
        />
        <Route
          component={SignOut}
          exact
          path="/sign-out"
        />
        <Route
          component={UnderDevelopment}
          exact
          path="/under-development"
        />
        <Route
          component={NotFound}
          exact
          path="/not-found"
        />
        <Route
          component={Profile} 
          exact
          path="/user/:user"/>
        {/* <Route
          component={Course} 
          exact
          path="/course/:course"/> */}
        <Redirect to="/not-found" />
      </Switch>
      </Suspense>
    );
  }
}
