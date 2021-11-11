import {
  setCharactersError,
  setCharactersInfo,
  setCharactersList,
  setEpisodesError,
  setEpisodesInfo,
  setEpisodesList
} from "../actions/actions";


export default function fetchAPI(type, dispatch, url){
  fetch(url)
      .then(res => res.json())
      .then(res => {
        if (type === 'characters'){
          if (res.error)
            dispatch(setCharactersError(true))
          else {
            dispatch(setCharactersError(false))
            dispatch(setCharactersList(res.results))
            dispatch(setCharactersInfo(res.info))
          }
        } else {
          if (res.error)
            dispatch(setEpisodesError(true))
          else {
            dispatch(setEpisodesError(false))
            dispatch(setEpisodesList(res.results))
            dispatch(setEpisodesInfo(res.info))
          }
        }
      });
}
