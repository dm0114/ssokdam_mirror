import axios from "axios";
import { SERVER_URL } from "../config";

export default async function FetchExchange(inputMoney) {
  const URL = `${SERVER_URL}/exchange`
  
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      token : localStorage.getItem("access-token"),
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      pbMoney: inputMoney,
    }),
  })
  const json = await response.json()
  return json
}