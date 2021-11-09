import {combineReducers} from 'redux'
import cardReducer from "./card.reducer"
import charactersReducer from "./charasters.reducer";
import episodesReducer from "./episodes.reducer";

export default combineReducers({
  cardReducer,
  charactersReducer,
  episodesReducer
})
