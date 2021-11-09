const charactersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_CHARACTERS_LIST':
      return action.characters
    default:
      return state
  }
}

export default charactersReducer
