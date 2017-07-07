'use strict'

import createReducer from '../utils/createReducer';

const initialState = {
  isLoaded: false,
}
const actionHandler = {
  ['ALLCLASS']: (state, action) => {
    return Object.assign({}, state, {
      isLoaded :true,
      data:action.data,
    })
  },
}

export default createReducer(initialState, actionHandler);
