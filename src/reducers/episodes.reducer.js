const episodesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EPISODES_LIST':
      return action.episodes
    default:
      return state
  }
}

export default episodesReducer
