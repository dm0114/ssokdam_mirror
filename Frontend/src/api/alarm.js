import axios from 'axios';
import { SERVER_URL } from '../config';

export async function fetchAlarm() {
  const URL = `${SERVER_URL}/alarm`

  const response = await axios(URL, {
    method: 'get',
    withCredentials: true,
    headers : {
      token : localStorage.getItem("access-token")
    },
  })

  console.log(response)
  response.then((res) => {
    console.log(res)
    return res
  })
  const json = await response.json();
  console.log(json);
  // return json
}