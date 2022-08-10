import { SERVER_URL } from '../config';
import ApiPost from "./customApi";

export async function CreateComplaint(userInput) {
  const URL = `${SERVER_URL}/post`
  
  const data = {
    pstTitle: userInput.pstTitle,
    pstCtnt: userInput.pstCtnt,
    pstProp: userInput.pstType,
    pstImg: userInput.pstImg,
    pstDumy : userInput.pstDumy
  }
  const response = await ApiPost.post(URL, data)
  
  return response.data
}