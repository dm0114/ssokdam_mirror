import { SERVER_URL } from '../config';
import Api from './customApi';

export async function fetchAlarm() {
  const URL = `${SERVER_URL}/alarm`

  const response = await Api(URL)
  
  return response.data
}