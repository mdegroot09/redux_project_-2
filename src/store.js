import {createStore} from redux;

const initialState = {
  name: {},
  category: {},
  authorFirstName: '',
  authorLastName: '',
  ingredients: [],
  instructions: []
}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_AUTHOR_FIRST_NAME = 'UPDATE_AUTHOR_FIRST_NAME'
export const UDPATE_AUTHOR_LAST_NAME = 'UDPATE_AUTHOR_LAST_NAME'
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS'
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS'

function reducer(state = initialState, action){
  // const {type, payload} = action
  switch (action.type) {
    case UPDATE_NAME:
      return {...state, name: action.payload};
    case UPDATE_CATEGORY:
      return {...state, category: action.payload};
    case UPDATE_AUTHOR_FIRST_NAME:
      return {...state, authorFirstName: action.payload}
    case UPDATE_AUTHOR_LAST_NAME:
      return {...state, authorLastName: action.payload}
    case UPDATE_INGREDIENTS:
      return {...state, ingredients: [...state.ingredients, action.payload]}
    case UPDATE_INSTRUCTIONS:
      return {...state, instructions: [...state.instructions, action.payload]}
    default:
      return state;
  }
}

export default createStore(reducer)