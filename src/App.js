import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//connect our component to our store
import {connect} from 'react-redux'
import { updateUser } from './actions/user-actions'
class App extends Component {

onUpdateUser = (event) => {
  this.props.onUpdateUser(event.target.value)
}


  render() {


    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.onUpdateUser}/> <p style={{"color":"red"}}>{this.props.user}</p> 
      </div>
    );
  }
}


const mapStateToProps= (state, props) => {
  console.log(props)
  return {
    products:state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props}`
  }
  
}; 

const mapActionToProps = {
  onUpdateUser:updateUser

}
// connect take three parameters 1: mapStateToProps:recive the state of store and use it as props to porvide that component
//                               2: mapActionToProps: dispatch action from my component eaisly  
export default connect(mapStateToProps , mapActionToProps) (App);
