import React, { Component, Fragment } from 'react';
import { withRouter ,Link} from 'react-router-dom';

// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Badge,
  IconButton,
  Popover,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Button,
  Divider,
  Icon
} from '@material-ui/core';
// Material icons
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  NotificationsOutlined as NotificationsIcon,
  Input as InputIcon,
  // AddCircle as AddIcon
} from '@material-ui/icons';

// Shared services
import { getNotifications } from 'services/notification';

// Custom components
import { NotificationList } from './components';

// Component styles
import styles from './styles';

class Topbar extends Component {
  signal = true;

  state = {
    notifications: [],
    notificationsLimit: 4,
    notificationsCount: 0,
    notificationsEl: null,
    menuOpen:false
  };

  async getNotifications() {
    try {
      const { notificationsLimit } = this.state;

      const { notifications, notificationsCount } = await getNotifications(
        notificationsLimit
      );

      if (this.signal) {
        this.setState({
          notifications,
          notificationsCount
        });
      }
    } catch (error) {
      return;
    }
  }

  componentDidMount() {
    this.signal = true;
    this.getNotifications();
  }

  componentWillUnmount() {
    this.signal = false;
  }

  handleSignOut = () => {
    const { history } = this.props;

    localStorage.setItem('isAuthenticated', false);
    history.push('/sign-in');
  };

  handleShowNotifications = event => {
    this.setState({
      notificationsEl: event.currentTarget
    });
  };

  handleCloseNotifications = () => {
    this.setState({
      notificationsEl: null
    });
  };
  menuOpen = (event) => {
    this.setState({menuOpen : event.currentTarget});
  };
  menuClose = () => {
    this.setState({menuOpen : null});
  };

  render() {
    const {
      classes,
      className,
      title,
      isSidebarOpen,
      onToggleSidebar
    } = this.props;
    const { notifications, notificationsCount, notificationsEl } = this.state;

    const rootClassName = classNames(classes.root, className);
    const showNotifications = Boolean(notificationsEl);
    return (
      <Fragment>
        <div className={rootClassName}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.menuButton}
              onClick={onToggleSidebar}
              variant="text"
            >
              {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Typography
              className={classes.title}
              variant="h4"
            >
              {title}
            </Typography>
            <IconButton
              className={classes.notificationsButton}
              onClick={this.handleShowNotifications}
            >
              <Badge
                badgeContent={notificationsCount}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            
            <Button
              className={classes.signOutButton}
              // onClick={this.handleSignOut}
            >
              Explore
            </Button>
            <Button
              className={classes.signOutButton}
              // onClick={this.handleSignOut}
            >
              Create <Icon style={{fontSize:15}}>add</Icon>
            </Button>
            <IconButton onClick={this.menuOpen} aria-controls="simple-menu" aria-haspopup="true" >
            <Avatar alt="User" src="/images/avatars/avatar_1.png" style={{margin:0}} />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={this.state.menuOpen}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(this.state.menuOpen)}
                onClose={this.menuClose}
              >
                <MenuItem onClick={this.menuClose}>Profile</MenuItem>
                {/* <MenuItem onClick={this.menuClose}>Your Courses</MenuItem> */}
                <Link to="/course"><MenuItem onClick={this.menuClose}>Your Boards</MenuItem></Link>
                {/* <MenuItem onClick={this.menuClose}>Your Followers</MenuItem> */}
                <Link to="/settings"><MenuItem onClick={this.menuClose}>Settings</MenuItem></Link>
                <MenuItem onClick={this.menuClose}>Help</MenuItem>
                <Divider className={classes.listDivider} />
                <Link to="/sign-out"><MenuItem onClick={this.menuClose}>Logout</MenuItem></Link>
                {/* <MenuItem onClick={this.handleSignOut}>Logout</MenuItem> */}
              </Menu>
          </Toolbar>
        </div>
        <Popover
          anchorEl={notificationsEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          onClose={this.handleCloseNotifications}
          open={showNotifications}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <NotificationList
            notifications={notifications}
            onSelect={this.handleCloseNotifications}
          />
        </Popover>
      </Fragment>
    );
  }
}

Topbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  title: PropTypes.string
};

Topbar.defaultProps = {
  onToggleSidebar: () => {}
};

export default compose(
  withRouter,
  withStyles(styles)
)(Topbar);
