import React from "react";
import { connect } from "react-redux";

console.log(process.env.REACT_APP_ENV);

const App = (props) => {
  console.log(props);

  return (    
  <div>
      {props.authenticationToken == null ? (
        "Login page"
      ) : (
        "Profile page"
      )}
  </div>
  );
}

const actionsCreactor = {

};

const mapState = (state) => {
  return { ...state.actionReducer};
};

export default connect(mapState, actionsCreactor)(App);