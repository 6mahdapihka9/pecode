const episodesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_EPISODES_LIST':
      return action.episodes
    default:
      return state
  }
}

export default episodesReducer
