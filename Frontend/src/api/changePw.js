import { SERVER_URL } from "../config";
import Api from "./customApi";

export default async function ChangePwd(userPwd, userId) {
  const URL = `${SERVER_URL}/exchange`
  
  const data = {
    userId: userId,
    userPwd: userPwd,
  }

  const response = await Api.post(URL, data, {
    headers: {
      "Content-type": "application/json",
    }
  })

  console.log(response)
  return response.data
}