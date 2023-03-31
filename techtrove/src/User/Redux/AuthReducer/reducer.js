import { createAccount } from "./action";
import { CREATE_ACCOUNT, LOGIN_SUCCESSFULL } from "./ActionTypes";

const initialState={
    accountCreated:false,
    createAccount:[],
    isAuth:false,
    
}
export const reducer=(state,{type,payload})=>{
    switch(type){
        case CREATE_ACCOUNT: return({...state,createAccount:payload,accountCreated:true})
        case LOGIN_SUCCESSFULL: return ({...state,isAuth:true,createAccount:payload})
        default : return state
    }
}
