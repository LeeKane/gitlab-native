'use strict'

import Channel from '../channel'

const changeTab= (tab)=>{
    return{
      type: 'TAB',
      data: tab
    };
}

const getAllClass= (username)=>{
  return (dispatch,getStore)=>{
    if (getStore().classList.isLoaded) {
      return Promise.resolve(dispatch({
        type: 'ALLCLASS',
        data: getStore().classList.data
      }))
    }
    let channel=new Channel();
    return channel.getAllClass(username)
    .then(data => {
      dispatch({
        type:"ALLCLASS",
        data
      })
    })
    .catch(err=> console.error(err))
  }
}

const getClassStudents = (username,id)=>
{
  return (dispatch, getStore) => {
    if (getStore().studentList[id]) {
      return Promise.resolve(dispatch({
        type: 'CLASSSTU',
          groupId:id,
        data: getStore().studentList[id],

      }))
    }
    const channel = new Channel();
    return channel.getClassStudent(username,id)
      .then(data => {
        return dispatch({
          type: 'CLASSSTU',
          groupId:id,
          data,

        })
      })
      .catch(err => console.error(err))
  }
}

const getAllExam= (username)=>{
  return (dispatch,getStore)=>{
    if (getStore().repoList.exams.isLoaded) {
      return Promise.resolve(dispatch({
        type: 'EXAM',
        data: getStore().repoList.exams.data
      }))
    }
    let channel=new Channel();
    return channel.getExam(username,2)
    .then(data => {
      dispatch({
        type:"EXAM",
        data
      })
    })
    .catch(err=> console.error(err))
  }
}

const getAllExercise= (username)=>{
  return (dispatch,getStore)=>{
    if (getStore().repoList.exercises.isLoaded) {
      return Promise.resolve(dispatch({
        type: 'EXERCISE',
        data: getStore().repoList.exercises.data
      }))
    }
    let channel=new Channel();
    return channel.getExercise(username,2)
    .then(data => {
      dispatch({
        type:"EXERCISE",
        data
      })
    })
    .catch(err=> console.error(err))
  }
}

const getAllHomework= (username)=>{
  return (dispatch,getStore)=>{
    if (getStore().repoList.homeworks.isLoaded) {
      return Promise.resolve(dispatch({
        type: 'HOMEWORK',
        data: getStore().repoList.homeworks.data
      }))
    }
    let channel=new Channel();
    return channel.getHomework(username,2)
    .then(data => {
      dispatch({
        type:"HOMEWORK",
        data
      })
    })
    .catch(err=> console.error(err))
  }
}

const getAssignment = (username,id)=>{
    return (dispatch,getStore)=>{
      if(getStore().assignments[id]){
        return Promise.resolve(dispatch({
          type:"ASSIGN",
          data: getStore().assignments[id],
          id
        }));
      }
      let channel=new Channel();
      return channel.getAssignment(username,id)
      .then(data=>{
        dispatch({
          type:"ASSIGN",
          data,
          id
        })
      })
      .catch(err=> console.error(err))
    }
}

export default {
  changeTab,
  getAllClass,
  getClassStudents,
  getAllExam,
  getAllHomework,
  getAllExercise,
  getAssignment
};
