import axios from "axios";
import { SERVER_URL } from "../config";

export default async function FetchFindId({name, phone}) {
  const URL = `${SERVER_URL}/findId`
  
  const data = {
    userName: name,
    userPhone: phone,
  };

  const response = {
    userPoint: 1,
  }
  
  

  // await axios
  //   .post(URL, JSON.stringify(data), {
  //     headers: {
  //       "Content-Type": `application/json`, // 토큰이랑 유저 포인트
  //     },
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   });
  
  return response
}
