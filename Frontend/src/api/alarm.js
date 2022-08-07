import { SERVER_URL } from '../config';

export async function fetchAlarm() {
  const URL = `${SERVER_URL}/alarm`

  const response = await fetch(URL, {
    headers : {
      token : localStorage.getItem("access-token")
    },
  })
  
  const json = await response.json();
  return json
}