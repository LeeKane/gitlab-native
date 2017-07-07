'use strict'

import createReducer from '../utils/createReducer';

const initialState = {
  tab: 'Class',
}

const actionHandler = {
  ['TAB']: (state, action) => {
    return Object.assign({}, state, {
      tab: action.data,
    })
  },
}

export default createReducer(initialState, actionHandler);
