import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontypes";

const initialState={
    isLoading:false,
    isError:false,
    auth:false,
    token:""
}


export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:return {...state,isLoading:true}
        case LOGIN_SUCCESS:return {...state,isLoading:false,auth:true,token:payload}
        case LOGIN_FAILURE:return {...state,isLoading:false,iserror:true}
      
        default:return state;
    }
}