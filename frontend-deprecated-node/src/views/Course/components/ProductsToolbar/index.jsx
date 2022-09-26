import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {createBoard} from 'actions/boardAction';


// Material helpers
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// Material components
import { Button } from '@material-ui/core';
import Loader from 'components/Loader'

// Shared components
import { DisplayMode, SearchInput } from 'components';
import compose from 'recompose/compose';
import {connect} from 'react-redux'

// Component styles
import styles from './styles';

class ProductsToolbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      boardNameModal: false,
      boardName: "",
      error:false
    };
  
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }


  handleCancel(){
    this.setState({boardNameModal: false});
    console.log("LOLOLO closing modal");
  }

  handleDone(){
    var name = this.state.boardName;
    if(name != "" && name.length < 200){
      this.props.createBoard()
      this.setState({boardNameModal: false});
      console.log("LOLOLO closing modal");
      console.log(name);
      return;
    }
    else{
      this.setState({error:true})
    }
  }

  handleClickOpen(){
    this.setState({boardNameModal: true})
    console.log("LOLOLO opening modal");
  }

  handleFieldChange = (value) => {
    this.setState({boardName: value});
    if(value){
      this.setState({error:false});
    }
  };
  render() {
    const { classes, className } = this.props;
    const { hasErrored, isLoading, status, info, isFullLoading } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <Dialog
          open={this.state.boardNameModal}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Create Board</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Enter an appropriate name for your Board. You can always change this later.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Board Name"
              type="text"
              error={this.state.error | hasErrored}
              fullWidth
              onChange={event =>
                this.handleFieldChange(event.target.value)
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleDone} color="primary">
              Create Course {isLoading?<Loader />:null}
            </Button>

          </DialogActions>
        </Dialog>
        {/* <div className={classes.row}>
          <span className={classes.spacer} />

        </div> */}
        <div className={classes.row}>
          <SearchInput
            className={classes.searchInput}
            placeholder="Search course"
          />
          <span className={classes.spacer} />
          {/* <DisplayMode mode="grid" /> */}
          <Button color="primary" size="medium" variant="outlined" onClick={this.handleClickOpen}>
            Create Course
          </Button>
        </div>
      </div>
    );
  }
}

ProductsToolbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
      createBoard : (name) => dispatch(createBoard(name)),
  }
}

const mapStateToProps = (state) => {
  return {
     info: state.dashboard.info,
     isLoading : state.dashboard.isLoading,
     hasErrored : state.dashboard.hasErrored,
     status: state.dashboard.status
  }
}


export default compose(
  withStyles(styles),
  connect(mapStateToProps,mapDispatchToProps)
)(ProductsToolbar)