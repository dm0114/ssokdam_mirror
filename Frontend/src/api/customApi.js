import axios from "axios";
import { SERVER_URL } from '../config';
import { getCookieToken } from "../Cookie";

const Api = axios.create({
  baseURL: SERVER_URL,
  timeout: 10000,
  params: {},
});

Api.interceptors.request.use(
  // refresh, refreshErrorHandle
);

Api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      if (error.response.data.message === "TokenExpiredError") {
        const originalRequest = config;
        const refreshToken = await getCookieToken("refreshToken");
        // token refresh 요청
        const { data } = await axios.post(
          `http://localhost:3000/refresh/token`, // token refresh api
          {
            refreshToken,
          }
        );
        // 새로운 토큰 저장
        const {
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        } = data;
        await AsyncStorage.multiSet([
          ["accessToken", newAccessToken],
          ["refreshToken", newRefreshToken],
        ]);
        axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default Api;