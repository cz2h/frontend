import React from "react";
import { connect } from "react-redux";

import Mainpage from "./layout/mainpage";
import './App.css';


console.log(process.env.REACT_APP_ENV);

const App = (props) => {
  console.log(props);

  return (    
    <Mainpage/>
  );
}

const actionsCreactor = {

};

const mapState = (state) => {
  return { ...state.actionReducer};
};

export default connect(mapState, actionsCreactor)(App);