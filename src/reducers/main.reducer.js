import {combineReducers} from 'redux'
import charactersReducer from "./charasters.reducer";
import episodesReducer from "./episodes.reducer";
import charactersInfoReducer from "./characters.info.reducer";
import episodesInfoReducer from "./episodes.info.reducer";

export default combineReducers({
  charactersReducer,
  episodesReducer,
  charactersInfoReducer,
  episodesInfoReducer
})
