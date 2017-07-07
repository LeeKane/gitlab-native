'use strict'

import createReducer from '../utils/createReducer';

const initialState = {
  // studentId: {assignmentId:}
}
const actionHandler = {
  ['STUASS']: (state, action) => {
    return Object.assign({}, state, {
       data:action.data
    })
  },
}
export default createReducer(initialState, actionHandler);
