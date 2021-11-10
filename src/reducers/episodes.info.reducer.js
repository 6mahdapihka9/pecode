const episodesInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EPISODES_INFO':
      return action.epsInfo
    default:
      return state
  }
}

export default episodesInfoReducer
