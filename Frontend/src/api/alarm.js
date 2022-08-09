import axios from 'axios';
import { SERVER_URL } from '../config';

export async function fetchAlarm() {
  const URL = `${SERVER_URL}/alarm`

  const response = await fetch(URL, {
    // method: 'get',
    // withCredentials: true,
    headers : {
      token : localStorage.getItem("access-token")
    },
  })

  // return response.data

  const json = await response.json();
  console.log(json);
  return json
}