import React, { Component, Fragment } from 'react';
// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
// Material helpers
import { withStyles, withWidth } from '@material-ui/core';
// import { Skeleton } from '@material-ui/lab';
// Material components
import { Drawer } from '@material-ui/core';
// Custom components
import { Sidebar, Topbar, Footer } from './components';
// Component styles
import styles from './styles';
import { getUserInfo } from 'actions/dashboardAction';
import { connect } from 'react-redux'
// import Redirector from 'Redirector';
import { Navigate } from 'react-router-dom';
import Loader from 'components/Loader'



// import { css } from "@emotion/core";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    const isMobile = ['xs', 'sm', 'md'].includes(props.width);

    this.state = {
      isOpen: !isMobile,
    };
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleToggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  componentWillMount() {
    this.props.getUserInfo();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState.state || this.props !== nextProps.props || localStorage.getItem("isAuthenticated");
  }

  render() {
    const { classes, width, title, children } = this.props;
    const { hasErrored, isLoading, status, info, isFullLoading } = this.props;
    const { isOpen } = this.state;
    const isMobile = ['xs', 'sm', 'md'].includes(width);
    const shiftTopbar = isOpen && !isMobile;
    const shiftContent = isOpen && !isMobile;

    if (hasErrored || localStorage.getItem("isAuthenticated") != "true") {
      if (status !== 100) {
        return <Navigate to="/not-found" />
      }

      else {
        return (
          <Navigate to="/not-found" />
        )
      }
    }

    if (isLoading) {
      return (
        <Fragment>
          <Topbar
            className={classNames(classes.topbar, {
              [classes.topbarShift]: shiftTopbar
            })}
            isSidebarOpen={isOpen}
            onToggleSidebar={this.handleToggleOpen}
            title={title}
          />
          <Drawer
            anchor="left"
            classes={{ paper: classes.drawerPaper }}
            onClose={this.handleClose}
            open={isOpen}
            variant={isMobile ? 'temporary' : 'persistent'}
          >
            {info && <Sidebar
              className={classes.sidebar}
              // fullname={"TEST"}
              fullname={info.username}
              // username={"test"} 
              username={info.name}
            />}
          </Drawer>
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: shiftContent
            })}
          >
            <Loader />
            <Footer />
          </main>
        </Fragment>

      )
    }
    return (
      <Fragment>
        <Topbar
          className={classNames(classes.topbar, {
            [classes.topbarShift]: shiftTopbar
          })}
          isSidebarOpen={isOpen}
          onToggleSidebar={this.handleToggleOpen}
          title={title}
        />
        <Drawer
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          onClose={this.handleClose}
          open={isOpen}
          variant={isMobile ? 'temporary' : 'persistent'}
        >
          {info && <Sidebar
            className={classes.sidebar}
            // fullname={"TEST"}
            fullname={info.username}
            // username={"test"} 
            username={info.name}
          />}
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: shiftContent
          })}
        >
          {children}
          <Footer />
        </main>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  width: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: () => dispatch(getUserInfo()),
  }
}

const mapStateToProps = (state) => {
  return {
    info: state.dashboard.info,
    isLoading: state.dashboard.isLoading,
    hasErrored: state.dashboard.hasErrored,
    status: state.dashboard.status
  }
}

export default compose(
  withStyles(styles),
  withWidth(),
  connect(mapStateToProps, mapDispatchToProps)
)(Dashboard);

