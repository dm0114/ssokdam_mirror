// Fetch API -> Json
export async function fetchMyPage() {
  const response = await fetch("http://localhost:8080/api/mypage/test", {
    headers : {
      token : localStorage.getItem("access-token")
    },
  })
  const json = await response.json();
  return json
}