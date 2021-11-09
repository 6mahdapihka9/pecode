const cardReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_POPUP_CARD':
      return action.card
    default:
      return state
  }
}

export default cardReducer
