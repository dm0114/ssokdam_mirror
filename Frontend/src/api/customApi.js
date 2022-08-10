import axios from "axios";
import { SERVER_URL } from '../config';
import { getCookieToken } from "../Cookie";

// 참고 글 : https://maruzzing.github.io/study/rnative/axios-interceptors%EB%A1%9C-%ED%86%A0%ED%81%B0-%EB%A6%AC%ED%94%84%EB%A0%88%EC%8B%9C-%ED%95%98%EA%B8%B0/
// res.ok === '토큰만료'
// response.access_token
// refresh 만료 => 로그인 페이지 리디렉션
// 로그인 필요한 기능은 모두 axios로 처리, 나머지는 fetch

const Api = axios.create({
  headers: {
    token : localStorage.getItem("access-token")
  },
  withCredentials: true,
  baseURL: SERVER_URL,
  timeout: 10000,
  params: {},
});

Api.interceptors.response.use( async (response) => {
  
  if (Object.keys(response.data).includes('ok')) {
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

  } else {
    console.log('토큰 유지 중');
    return response
  }
})

export default Api;