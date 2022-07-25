// Axios vs fetch

export const fetchLogin = async ({ id, password }) => {
   const URL = "http://localhost:8080/api/login"

  let response = await fetch(URL, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
  },
    body: JSON.stringify({
      id: id, //userId
      password: password  //userPwd
    })
  })

  return response
};