import { SERVER_URL } from '../config';

export async function fetchMyAsk() {
  const URL = `${SERVER_URL}/myAsk`

  const response = await fetch(URL, {
    headers : {
      token : localStorage.getItem("access-token")
    },
  })
  
  console.log(response);
  const json = await response.json();
  console.log(json);
  return json
}