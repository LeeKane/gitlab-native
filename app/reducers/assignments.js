'use strict'

import createReducer from '../utils/createReducer';

const initialState = {
   // id: {...}
}
const actionHandler = {
  ['ASSIGN']: (state, action) => {
    const data = state[action.id] ? Object.assign(state[action.id], action.data) : action.data
    return Object.assign({}, state, {
      [action.id]: data
    })
  },
}

export default createReducer(initialState, actionHandler);
