import axios from "axios";
import { SERVER_URL } from '../config';
import { getCookieToken } from "../Cookie";


export const Api = axios.create({
  headers: {
    token : localStorage.getItem("access-token")
  },
  withCredentials: true,
  baseURL: SERVER_URL,
  timeout: 10000,
});

<<<<<<< HEAD
export const ApiPost = axios.create({
  headers: {
    token : localStorage.getItem("access-token"),
    "Content-type": "application/json",
  },
  withCredentials: true,
  baseURL: SERVER_URL,
  timeout: 10000,
});

=======
>>>>>>> 0321c32a539231c1eab83b8952a65260653a149f
Api.interceptors.response.use( async (response) => {
  console.log(response)
  if (Object.keys(response.data).includes('ok') && response.data.ok === '토큰만료') {
    const originalRequest = response.config
    const refreshToken = await getCookieToken();
    
    // refresh-token으로 access-token 요청
    const {data} = await axios.get(
      `${SERVER_URL}/refreshToken`,
      {
        headers: {
          token : refreshToken
        },
      }
    );
    localStorage.setItem('access-token', data.Access_token)
    console.log('토큰 만료 후 재요청');

    // 새로운 accessToken으로 재요청
<<<<<<< HEAD
    originalRequest.headers.token(localStorage.getItem("access-token"))
    return originalRequest

  } else {
    console.log('토큰 유지 중');
    return response
  }
})

ApiPost.interceptors.response.use( async (response) => {
  
  if (Object.keys(response.data).includes('ok') && response.data.ok === '토큰만료') {
    const originalRequest = response.config
    const refreshToken = await getCookieToken();
    
    // refresh-token으로 access-token 요청
    const {data} = await axios.get(
      `${SERVER_URL}/refreshToken`,
      {
        headers: {
          token : refreshToken
        },
      }
    );
    localStorage.setItem('access-token', data.Access_token)
    console.log('토큰 만료 후 재요청');

    // 새로운 accessToken으로 재요청
    return originalRequest
=======
    originalRequest.headers.token = localStorage.getItem("access-token")
    console.log(originalRequest)
    return Api(originalRequest)
>>>>>>> 0321c32a539231c1eab83b8952a65260653a149f

  } else {
    console.log('토큰 유지 중');
    return response
  }
})

export default Api;