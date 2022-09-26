import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './views/SignIn';
import UnderDevelopment from './views/UnderDevelopment';
import NotFound from './views/NotFound';
import Landing from './views/Landing';
import NetworkError from './views/NetworkError';
// import SignIn from './views/SignIn';

export default class Redirector extends Component {
  render() {
    if(this.props.status == 400){
      return (<UnderDevelopment />)
    }
    if(this.props.status == 404){
      return (<NotFound />) 
    } 
    if(this.props.status == 50){
      return (<NetworkError />) 
    }
    if(this.props.status == 'login'){
      return (<SignIn />) 
    }
    else{
      return (<NotFound />)
    }   
  }
}
