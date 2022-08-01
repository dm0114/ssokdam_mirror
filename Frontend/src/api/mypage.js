import { SERVER_URL } from '../config';

export async function fetchMyPage() {
  const URL = `${SERVER_URL}/mypage/test`

  const response = await fetch(URL, {
    headers : {
      token : localStorage.getItem("access-token")
    },
  })
  
  const json = await response.json();
  console.log(json)
  return json
}