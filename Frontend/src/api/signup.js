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