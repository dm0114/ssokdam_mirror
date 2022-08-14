import { SERVER_URL } from "../config";
import Api from "./customApi";

export async function fetchCertNum(userPhone) {
  const URL = `${SERVER_URL}/login/phone`
  
  const data = {
    userPhone: userPhone
  }
  
  const response = await Api.post(URL, data)
  console.log(response.data)
  return response.data
}

export async function checkCertNum(phoneToken, userCertNum) {
  const URL = `${SERVER_URL}/login/phone/${userCertNum}`
  
  const response = await Api.get(URL, {
    headers: {
      token: phoneToken
    }
  })
  console.log(response.data)
  return response.data
}