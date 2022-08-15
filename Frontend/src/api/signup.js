import {SERVER_URL} from "../config";

export default async function AccountCheck({userName, impUid}){
    const URL = `${SERVER_URL}/login/account`

    const response = await fetch(URL, {
        method : "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            userName : userName,
            imp_uid : impUid,
        }),
    })
    return response
}

export const fetchAccountCerti = async () => {
    const url = `${SERVER_URL}/signup1/check`
    const response = await fetch(url, {
        method : 'GET',
        headers : {
            'Content-type': 'application/json',
        }
    })
    return response
}