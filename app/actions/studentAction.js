'use strict'

import Channel from '../channel';

const getExam= (username)=>{
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

const getExercise= (username)=>{
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

const getHomework= (username)=>{
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

const getReadme= (username,assignmentId,studentId,questionID)=>{
  return (dispatch,getStore)=>{
    let channel=new Channel();
    return channel.getReadme(username,assignmentId,studentId,questionID)
    .then(data => {
      dispatch({
        type:"README",
        data
      })
    })
    .catch(err=> console.error(err))
  }
}

const getStudentAssignment= (username,assignmentId,studentId)=>{
  return (dispatch,getStore)=>{
    let channel=new Channel();
    return channel.getStudentAssignment(username,assignmentId,studentId)
    .then(data => {
      dispatch({
        type:"STUASS",
        data,
        studentId,
        assignmentId
      })
    })
    .catch(err=> console.error(err))
  }
}

export default {
  getExam,
  getHomework,
  getExercise,
  getReadme,
  getStudentAssignment,
};
