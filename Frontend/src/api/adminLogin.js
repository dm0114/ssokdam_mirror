
// Axios vs fetch
export default async function FetchAdminLogin({ id, password }){
    const URL = "http://localhost:8080/admin/login";
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            userId: id,
            userPwd: password,
        }),
    })
    return response
};
