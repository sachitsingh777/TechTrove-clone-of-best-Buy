import { createAccount } from "./action";
import { CREATE_ACCOUNT } from "./ActionTypes";

const initialState={
    accountCreated:false,
    createAccount:[]
}
export const reducer=(state,{type,payload})=>{
    switch(type){
        case CREATE_ACCOUNT: return({...state,createAccount:payload,accountCreated:true})
    }
}
