// Fetch API -> Json
export async function fetchMyPage() {
  const response = await fetch("http://localhost:8888/users")
  const json = await response.json();
  return json
}