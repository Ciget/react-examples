const ADD_WISH = 'ADD_WISH';

const wish = (state, action) => {
  switch (action.type) {
    case ADD_WISH:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

const wishes = (state = [], action) => {
  switch (action.type) {
    case ADD_WISH:
     return [...state, wish(undefined, action)];
    default:
      return state
  }
}

export default wishes
