import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

console.log(process.env.REACT_APP_ENV);

function App() {
  return (    
  <div>
    <Provider store={store}>  
      This is the front page
    </Provider>
  </div>
  );
}

export default App;