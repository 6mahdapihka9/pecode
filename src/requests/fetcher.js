import {setCharactersInfo, setCharactersList, setEpisodesInfo, setEpisodesList} from "../actions/actions";


export default function fetchAPI(type, dispatch, url){
  fetch(url)
      .then(res => res.json())
      .then(res => {
        if (type === 'characters'){
          dispatch(setCharactersList(res.results))
          dispatch(setCharactersInfo(res.info))
        } else {
          dispatch(setEpisodesList(res.results))
          dispatch(setEpisodesInfo(res.info))
        }
      });
}
