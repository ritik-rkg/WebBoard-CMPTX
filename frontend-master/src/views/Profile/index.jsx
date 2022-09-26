import React, { Component } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

// // Externals
// import PropTypes from 'prop-types';
import compose from 'recompose/compose';
// import validate from 'validate.js';
import _ from 'underscore';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
// import {
//   Grid,
//   Button,
//   IconButton,
//   CircularProgress,
//   TextField,
//   Typography
// } from '@material-ui/core';


// Component styles
import styles from './styles';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}


class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <div className={classes.root}>
        <p>Hello</p>
      </div>
    );
  }
}



export default compose(
  withRouter,
  withStyles(styles)
)(Profile);

