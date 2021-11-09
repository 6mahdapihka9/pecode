import {combineReducers} from 'redux'
import charactersReducer from "./charasters.reducer";
import episodesReducer from "./episodes.reducer";

export default combineReducers({
  charactersReducer,
  episodesReducer
})
