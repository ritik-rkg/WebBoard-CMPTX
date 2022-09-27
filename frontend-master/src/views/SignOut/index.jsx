import React, { Component } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {logout} from 'actions/logoutAction';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Grid,
  Button,
  IconButton,
  CircularProgress,
  TextField,
  Typography
} from '@material-ui/core';


// Component styles
import styles from './styles';

class SignOut extends Component {

  componentWillMount(){
    this.props.logout();
  }

  render() {
    const { classes, isLoading, hasErrored, errorMsg } = this.props;

    if(isLoading){
      return(
        <div>
          <p>Logging Out</p>
        </div>        
      );
    }

    if(this.props.status == 200){
      localStorage.setItem('isAuthenticated', false);
      console.log("signout cconsole cookie log",document.cookie);
      // this.props.history.push('/sign-in');
      return(
        <Redirect to="/sign-in" />
      )
    }

    return(
    <div>
    <p>Successfully Lol</p>
  </div>);

  }
}

SignOut.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
      logout : () => dispatch(logout()),
  }
}

const mapStateToProps = (state) => {
  return {
    //  info: state.dashboard.info,
     isLoading : state.logout.isLoading,
     hasErrored : state.logout.hasErrored,
     status: state.logout.status,
     errorMsg: state.logout.errorMsg
  }
}


export default compose(
  withRouter,
  connect(mapStateToProps,mapDispatchToProps),
  withStyles(styles)
)(SignOut);
