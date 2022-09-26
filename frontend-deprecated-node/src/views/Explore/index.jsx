import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';

// // Externals
// import PropTypes from 'prop-types';
// import compose from 'recompose/compose';
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


class Explore extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
            <p>Hello</p>
        </div>
    );
  }}



export default withStyles(styles)(Explore);

