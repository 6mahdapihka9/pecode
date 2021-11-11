import {combineReducers} from 'redux'
import charactersReducer from "./charasters.reducer";
import episodesReducer from "./episodes.reducer";
import charactersInfoReducer from "./characters.info.reducer";
import episodesInfoReducer from "./episodes.info.reducer";
import charactersErrorReducer from "./characters.error.reducer";
import episodesErrorReducer from "./episodes.error.reducer";

export default combineReducers({
  charactersReducer,
  episodesReducer,
  charactersInfoReducer,
  episodesInfoReducer,
  charactersErrorReducer,
  episodesErrorReducer
})
