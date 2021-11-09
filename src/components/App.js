import React, {useEffect} from "react"
import {connect} from "react-redux"

import './App.css'
import BasicTabs from "./tabs/BasicTabs"
import {initiateCharactersList, initiateEpisodesList} from "../actions/actions";
import {charactersAPI, episodesAPI} from "../requests/requests";

function App({dispatch}) {
  useEffect(()=>{

    fetch(charactersAPI)
        .then(res => res.json())
        .then(res => dispatch(initiateCharactersList(res)));
    fetch(episodesAPI)
        .then(res => res.json())
        .then(res => dispatch(initiateEpisodesList(res)));

  })

  return (
    <div className="App">
      <BasicTabs />
    </div>
  );
}

export default connect()(App);
