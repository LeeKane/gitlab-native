'use strict'
import createReducer from '../utils/createReducer';

const initialState = {
  exams:{
    isLoaded: false,
    data:[]
  },
  exercises:{
    isLoaded: false,
    data:[]
  },
  homeworks:{
    isLoaded: false,
    data:[]
  }
}

const actionHandler = {
  ['EXAM']: (state, action) => {
    return Object.assign({}, state, {
      exams:{
        isLoaded: true,
        data: action.data
      }
    })
  },
  ['EXERCISE']:(state,action)=>
  {
    return Object.assign({}, state, {
      exercises:{
        isLoaded: true,
        data: action.data
      }
    })
  },
  ['HOMEWORK']:(state,action)=>
  {
    return Object.assign({}, state, {
      homeworks:{
        isLoaded: true,
        data: action.data
      }
    })
  },
}
export default createReducer(initialState, actionHandler);
