import { ADMIN_SERVER_URL } from '../config';
import {SERVER_URL} from "../config";
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

export default async function CreateAdminNotice({ title, content, pstImg }){
    console.log(title,content,pstImg)
    const URL = `${SERVER_URL}/post`;
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            token : localStorage.getItem('access-token'),
        },
        body: JSON.stringify({
            pstTitle : title,
            pstCtnt : content,
            pstImg : pstImg,
            pstProp : "공지사항"
        }),
    })
    return response
}; // Notice Create => todo => ready

export async function fetchNotices(){
    // const URL = `${ADMIN_SERVER_URL}/exchange`;
    const URL = `${ADMIN_SERVER_URL}/notice`
    const response = await fetch(URL, {
        method: "GET"
    })
    return response
}; // Notice Read

export async function fetchNoticeUpdate({ pstSeq, pstTitle, pstCtnt, file }){
    const URL = `${ADMIN_SERVER_URL}/post/${pstSeq}`;
    // const URL = 'http://localhost:8888/notices'
    const response = await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            token : localStorage.getItem('access-token'),
            pstTitle : pstTitle,
            pstCtnt : pstCtnt,
            pstImg : file,
            pstProp : "공지사항"
        }), // 백엔드에서 생성일시 update되는 순간 최신화
    })
    return response
}; // Notice Update todo => ready

export async function fetchNoticeDelete(id){
    const URL = `${SERVER_URL}/post/${id}`;
    // const URL = 'http://localhost:8888/notices'
    const response = await fetch(URL, {
        method: "DELETE",
    })
    return response
}; // Notice DELETE todo => ready



// ----------------- Complain Function ------------- //
export async function fetchComplains(){
    const URL = `${ADMIN_SERVER_URL}/complain`
    let response = await fetch(URL, {
        method : 'GET',
    })
    return response
} // done

export async function fetchBrokenDevice(){
    const URL = `${ADMIN_SERVER_URL}/broken`
    let response = await fetch(URL, {
        method : 'GET'
    })
    return response
} // done

export async function DeleteComplain(id){
    const URL = `${ADMIN_SERVER_URL}/post/${id}`
    let response = await fetch(URL, {
        method : 'DELETE',
    })
    return response
} // todo => ready


export async function commentCreate({postId, cmtCtnt}){
    const URL = `${ADMIN_SERVER_URL}/post/${postId}/comment`
    let response = await fetch(URL, {
        method : 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            token : localStorage.getItem('access-token'),
            cmtCtnt : cmtCtnt
        }),
    })
    return response
} // todo => ready

export async function commentUpdate({postId,cmtId,cmtCtnt}){
    const URL = `${ADMIN_SERVER_URL}/post/${postId}/comment/${cmtId}`
    let response = await fetch(URL, {
        method : 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            token : localStorage.getItem('access-token'),
            cmtCtnt : cmtCtnt
        }),
    })
    return response
} // todo


export async function commentDelete({postId, cmtId}){
    const URL = `${ADMIN_SERVER_URL}/post/${postId}/comment/${cmtId}`
    let response = await fetch(URL, {
        method : 'DELETE',
        })
    return response
} // todo => ready







// ---------------------------------------------------
export async function fetchExchange(){
    // const URL = `${ADMIN_SERVER_URL}/exchange`;
    const URL = `${ADMIN_SERVER_URL}/exchange`
    const response = await fetch(URL, {
        method: "GET"
    })
    return response
}; // done

export async function AcceptExchange(id){
    const URL = `${ADMIN_SERVER_URL}/exchange` // id리스트로
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            id : id
        }),
    })
    return response
} // todo => ready

export async function DeleteExchange(id){
    const URL = `${ADMIN_SERVER_URL}/exchange/${id}` // id리스트로
    const response = await fetch(URL, {
        method: "DELETE",
    })
    return response
} // todo => ready
// ---------------------------- UserManagement ----------- //

export async function fetchUsers(){
    // const URL = `${ADMIN_SERVER_URL}/userManagement`;
    const URL = `${ADMIN_SERVER_URL}/users`
    const response = await fetch(URL, {
        method: "GET"
    })
    return response
};

export async function UpdateUser(id, newData){
    const URL = `${ADMIN_SERVER_URL}/users/${id}` // id리스트로
    const response = await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            newData : newData
        }),

    })
    return response
} // todo => 삭제

export async function DeleteUser(userId){
    const URL = `${ADMIN_SERVER_URL}/users` // id리스트로
    const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
            userId : userId
        }),
    })
    return response
} // todo => ready

