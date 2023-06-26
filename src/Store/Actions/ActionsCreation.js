import { Get_User_Gmail, Get_User_Name } from "./ActionsTypes"

export const getUserName=(UserName)=>{
    return {
        type:Get_User_Name,
        payload:UserName
    }
}

export const getUserGmail=(Gmail)=>{
    return {
        type:Get_User_Gmail,
        payload:Gmail
    }
}
