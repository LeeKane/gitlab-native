'use strict'

import createReducer from '../utils/createReducer';

const initialState = {
  // groupId: {isLogLoaded, log, ...}
}
const actionHandler = {
  ['CLASSSTU']: (state, action) => {
    const data = state[action.groupId] ? Object.assign(state[action.groupId], action.data) : action.data
    return {
      [action.groupId]: data
    }
  }
}
export default createReducer(initialState, actionHandler);
