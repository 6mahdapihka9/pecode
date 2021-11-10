import React from "react"
import {connect} from "react-redux"

import './App.css'
import BasicTabs from "./tabs/BasicTabs"

function App() {

  return (
    <div className="App">
      <BasicTabs />
    </div>
  );
}

export default connect()(App);
