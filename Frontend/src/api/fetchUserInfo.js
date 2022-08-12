import { SERVER_URL } from "../config";
import Api from "./customApi";

export default async function fetchUserInfo() {
  const URL = `${SERVER_URL}/userinfo`
  
  const response = await Api(URL, {
    headers: {
      token : localStorage.getItem("access-token")
    },
  })

  return response.data
}