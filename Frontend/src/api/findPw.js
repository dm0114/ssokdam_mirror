import axios from "axios";
import { SERVER_URL } from "../config";

export default async function FetchFindPw({ id, phone }) {
  const URL = `${SERVER_URL}/findPw`

  const data = {
    userId: id,
    userPhone: phone,
  };

  const response = {
    userPw : 'testPw'
  }

  // await axios
  //   .post(URL, JSON.stringify(data), {
  //     headers: {
  //       "Content-Type": `application/json`,
  //     },
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   });
  return response
}
