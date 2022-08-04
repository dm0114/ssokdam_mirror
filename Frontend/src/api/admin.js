import { ADMIN_SERVER_URL } from '../config';

export default async function CreateAdminNotice({ title, content, file }){
    // const URL = `${ADMIN_SERVER_URL}/notice/create`;
    const URL = 'http://localhost:8888/notices'
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            title : title,
            content : content,
            file : file
        }),
    })
    return response
};

export async function fetchExchange(){
    // const URL = `${ADMIN_SERVER_URL}/exchange`;
    const URL = 'http://localhost:8888/exchanges'
    const response = await fetch(URL, {
        method: "GET"
    })
    return response
};

export async function fetchUsers(){
    // const URL = `${ADMIN_SERVER_URL}/userManagement`;
    const URL = 'http://localhost:8888/users'
    const response = await fetch(URL, {
        method: "GET"
    })
    return response
};

export async function fetchGeneralInfo(){
    // const URL = `${ADMIN_SERVER_URL}/;
    const URL = 'http://localhost:8888/users'
    const response = await fetch(URL, {
        method: "GET"
    })
    return response
};