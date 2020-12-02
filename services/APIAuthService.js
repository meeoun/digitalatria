import axios from 'axios'

const apiAuthClient = axios.create({
  baseURL: `http://laravel.net/api/`,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  accountUpdate(form, token){
    return apiAuthClient.post(`public/account/update`,form, {headers: {Authorization: token}})
  },
  storeReply(post,comment,token, body){
    return apiAuthClient.post(`comments/${post}/${comment}`,body ,{headers: {Authorization: token}})
  },
  storeComment(post,token, body){
    return apiAuthClient.post(`comments/${post}`,body ,{headers: {Authorization: token}})
  },
  logout(token){
    return apiAuthClient.post(`logout`, null,{headers: {Authorization: token}})
  }
}
