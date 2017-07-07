'use strict'

import Channel from '../channel'

const login=(username,password)=>{
  return (dispatch)=>{
    const channel =new Channel();
    return channel.login(username,password)
      .then(data=> {
        if( data._bodyInit.size !== 0)
        {
          return data.json();
        }
        else
        {
          return {};
        }
      })
      .then(data => {
        if(data.id){
        dispatch({
          type:'LOGIN',
          data:Object.assign({},data,{fail:false})
        });
        }
        else {
          dispatch({
            type:'LOGINFAIL',
            data:{fail: true}
          });
        }
      })
      .catch(err => {
        dispatch({
          type:'LOGINFAIL',
          data:{fail: true}
        });
      })
  }
};

export default {
  login
};
