const episodesErrorReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_EPISODES_ERROR':
      return action.isErrorOccurred
    default:
      return state
  }
}

export default episodesErrorReducer
