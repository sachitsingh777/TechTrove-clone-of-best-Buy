import { CREATE_ACCOUNT, LOGIN_SUCCESSFULL } from "./actionTypes"

const initialState={
    accountCreatedSuccessfull:false,
    userDetails:[],
    isAuth:false,
    
}
export const reducer=(state=initialState,{type,payload})=>{
    // console.log(state)
    switch(type){
        case CREATE_ACCOUNT: return({...state,accountCreatedSuccessfull:true})
        case LOGIN_SUCCESSFULL: return ({isAuth:true,userDetails:payload})
        default : return state
    }
}
 