import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor:"transparent",
    [theme.breakpoints.up('md')]: {
      backgroundColor:"transparent",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link:{
    color:"black",
    [theme.breakpoints.up('sm')]: {
      color:"white",
    },
  },
  linkSmHidden:{
    color:"white",
    display:"none",
    [theme.breakpoints.up('sm')]: {
        display:"block",
      },
    },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Link to="/" >
            <img
              alt="Webboard logo"
              src="/images/logos/logo-black.svg"
            />
          </Link>
          <Typography variant="h6" className={classes.title} color="inherit"></Typography>
          <Link to="/help" className={classes.linkSmHidden} ><Button color="inherit">Help</Button></Link>
          <Link to="/about" className={classes.linkSmHidden} ><Button color="inherit">About</Button></Link>
          <Link to="/sign-in" className={classes.link} ><Button color="inherit">Login</Button></Link>
          <Link to="/sign-up" className={classes.link} ><Button color="inherit">Sign up</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
