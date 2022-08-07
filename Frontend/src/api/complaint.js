import { SERVER_URL } from '../config';

export async function CreateComplaint(userInput) {
  const URL = `${SERVER_URL}/complaint`

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      token : localStorage.getItem("access-token"),
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      pstTitle: userInput.pstTitle,
      pstCtnt: userInput.pstCtnt,
      pstProp: userInput.pstType
    }),
  })
  const json = await response.json()
  return json
}