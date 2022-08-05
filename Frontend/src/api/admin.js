import { ADMIN_SERVER_URL } from '../config';

// ----------- Main function --------

export async function fetchGeneralInfo(){
    // const URL = `${ADMIN_SERVER_URL}/;
    const URL = `${ADMIN_SERVER_URL}`
    const response = await fetch(URL, {
        method: "GET"
    })
    return response
};

// ----------- Notice function -------------------

export default async function CreateAdminNotice({ title, content, file }){
    // const URL = `${ADMIN_SERVER_URL}/notice/create`;
    const URL = 'http://localhost:8888/notices'
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            pstTitle : title,
            pstCtnt : content,
            file : file
        }),
    })
    return response
}; // Notice Create

export async function fetchNotices(){
    // const URL = `${ADMIN_SERVER_URL}/exchange`;
    const URL = `${ADMIN_SERVER_URL}/notice`
    const response = await fetch(URL, {
        method: "GET"
    })
    return response
}; // Notice Read

export async function fetchNoticeUpdate({ id, title, content, file }){
    const URL = `${ADMIN_SERVER_URL}/notice/${id}`;
    // const URL = 'http://localhost:8888/notices'
    const response = await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            pstTitle : title,
            pstCtnt : content,
            file : file
        }), // 백엔드에서 생성일시 update되는 순간 최신화
    })
    return response
}; // Notice Update

export async function fetchNoticeDelete(id){
    const URL = `${ADMIN_SERVER_URL}/notice/${id}`;
    // const URL = 'http://localhost:8888/notices'
    const response = await fetch(URL, {
        method: "DELETE",
    })
    return response
}; // Notice DELETE



// ----------------- Complain Function ------------- //
export async function fetchComplains(){
    const URL = `${ADMIN_SERVER_URL}/complain`
    let response = await fetch(URL, {
        method : 'GET',
    })
    return response
}

export async function fetchBrokenDevice(){
    const URL = `${ADMIN_SERVER_URL}/broken`
    let response = await fetch(URL, {
        method : 'GET'
    })
    return response
}






// ---------------------------------------------------
export async function fetchExchange(){
    // const URL = `${ADMIN_SERVER_URL}/exchange`;
    const URL = `${ADMIN_SERVER_URL}/exchange`
    const response = await fetch(URL, {
        method: "GET"
    })
    return response
};

export async function fetchUsers(){
    // const URL = `${ADMIN_SERVER_URL}/userManagement`;
    const URL = `${ADMIN_SERVER_URL}/users`
    const response = await fetch(URL, {
        method: "GET"
    })
    return response
};


