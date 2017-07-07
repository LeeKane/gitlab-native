'use strict'
const address={
  login:(username,password)=>{
    return `http://115.29.184.56:8090/api/user/auth?${username}&${password}` ;
  },
  allClass:()=>{
    return 'http://115.29.184.56:8090/api/group'
  },
  exam:(courseId)=>{
    return `http://115.29.184.56:8090/api/course/${courseId}/exam`
  },
  homework:(courseId)=>{
    return `http://115.29.184.56:8090/api/course/${courseId}/homework`
  },
  exercise:(courseId)=>{
    return `http://115.29.184.56:8090/api/course/${courseId}/exercise`
  },
  assignment:(assignmentId)=>{
    return `http://115.29.184.56:8090/api/assignment/${assignmentId}/score`
  },
  readme:(assignmentId,studentId,questionId)=>{
    return `http://115.29.184.56:8090/api/assignment/${assignmentId}/student/${studentId}/question/${questionId}`
  },
  studentAssignment:(assignmentId,studentId)=>{
    return `http://115.29.184.56:8090/api/assignment/${assignmentId}/student/${studentId}/analysis`
  }


};

export default address;
