'use strict'

import createReducer from '../utils/createReducer';

const initialState = {
  type: 'student',
}

const actionHandler = {
  ['LOGIN']: (state, action) => {
    return Object.assign({}, state,action.data)
  },
  ['LOGINFAIL']: (state , action)=>{
      return Object.assign({}, state,action.data)
    },
}

export default createReducer(initialState, actionHandler);
