import {SERVER_URL} from "../config";

export async function fetchUseState(){
    const URL = `${SERVER_URL}/use`
    const response = await fetch(URL, {
        method : "GET"
    })
    return response
}