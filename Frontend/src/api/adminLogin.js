import { ADMIN_SERVER_URL } from '../config';

// Axios vs fetch
export default async function FetchAdminLogin({ id, password }){
    const URL = `${ADMIN_SERVER_URL}/login`;
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
