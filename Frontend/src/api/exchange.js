import { SERVER_URL } from "../config";
import ApiPost from "./customApi";

export default async function FetchExchange(inputMoney) {
  const URL = `${SERVER_URL}/exchange`
  
  const data = {
    pbMoney: inputMoney,
  }

  const response = await ApiPost.post(URL, data)

  return response.data
}