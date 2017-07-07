'use strict'

import createReducer from '../utils/createReducer';

const initialState = {

}
const actionHandler = {
  ['README']: (state, action) => {
    return Object.assign({}, state, {
       data:action.data
    })
  },
}

export default createReducer(initialState, actionHandler);
