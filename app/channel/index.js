'use strict'

import address from './address'
import Base64 from '../utils/Base64'
export default class Channel{

  login(username,password){
    const url=address.login();
    return window.fetch(url,{
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         "username": `${username}`,
         "password": `${password}`,
       })
    })
    .then(res => res)
  }

  getAllClass(username){
    const url = address.allClass();
    let result='sss';
    var str = `${username}:123`;
    var base = new Base64();
    var token = base.encode(str);
    return window.fetch(url,{
      headers: {
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-US",
        Accept: "*/*",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
        "Authorization":`Basic ${token}`
      }})
      .then(res => res.json(),err=> console.error(err));
  }

  getClassStudent(username,groupId){
    let url = address.allClass();
    url=`${url}/${groupId}/students`;
    let result='sss';
    var str = `${username}:123`;
    var base = new Base64();
    var token = base.encode(str);
    return window.fetch(url,{
      headers: {
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-US",
        Accept: "*/*",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
        "Authorization":`Basic ${token}`
      }})
      .then(res => res.json(),err=> console.error(err));
  }

  getExam(username,courseId){
    let url = address.exam(courseId);
    let result='sss';
    var str = `${username}:123`;
    var base = new Base64();
    var token = base.encode(str);
    return window.fetch(url,{
      headers: {
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-US",
        Accept: "*/*",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
        "Authorization":`Basic ${token}`
      }})
      .then(res => res.json(),err=> console.error(err));
  }

  getHomework(username,courseId){
    let url = address.homework(courseId);
    let result='sss';
    var str = `${username}:123`;
    var base = new Base64();
    var token = base.encode(str);
    return window.fetch(url,{
      headers: {
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-US",
        Accept: "*/*",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
        "Authorization":`Basic ${token}`
      }})
      .then(res => res.json(),err=> console.error(err));
  }

  getExercise(username,courseId){
    let url = address.exercise(courseId);
    let result='sss';
    var str = `${username}:123`;
    var base = new Base64();
    var token = base.encode(str);
    return window.fetch(url,{
      headers: {
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-US",
        Accept: "*/*",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
        "Authorization":`Basic ${token}`
      }})
      .then(res => res.json(),err=> console.error(err));
  }

  getAssignment(username,assignmentId){
    //TODO:assignmentId
    let url = address.assignment(38);
    let result='sss';
    var str = `${username}:123`;
    var base = new Base64();
    var token = base.encode(str);
    return window.fetch(url,{
      headers: {
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-US",
        Accept: "*/*",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
        "Authorization":`Basic ${token}`
      }})
      .then(res => res.json(),err=> console.error(err));
  }

  getReadme(username,assignmentId,studentId,questionId){
    //TODO:assignmentId,studentID,questionId
    let url = address.readme(98,227,26);
    let result='sss';
    var str = `${username}:123`;
    var base = new Base64();
    var token = base.encode(str);
    return window.fetch(url,{
      headers: {
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-US",
        Accept: "*/*",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
        "Authorization":`Basic ${token}`
      }})
      .then(res => res.json(),err=> console.error(err));
  }

  getStudentAssignment(username,assignmentId,studentId){
    //TODO:assignmentId,studentID,questionId
    let url = address.studentAssignment(38,280);
    let result='sss';
    var str = `${username}:123`;
    var base = new Base64();
    var token = base.encode(str);
    return window.fetch(url,{
      headers: {
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-US",
        Accept: "*/*",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
        "Authorization":`Basic ${token}`
      }})
      .then(res => res.json(),err=> console.error(err));
  }

}
