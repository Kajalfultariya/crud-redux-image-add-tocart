import * as types from "./actionTypes";

export const loadUsersStart =()=>({
    type :types.LOAD_USERS_START,

})
export const loadUsersError=(error)=>({
    type :types.LOAD_USERS_ERROR,
    payload:error,
    
})
export const loadUsersSuccess =(users)=>({
    type :types.LOAD_USERS_SUCCESS,
    payload:users,
})

//lOGIN USER
export const loginUsersStart =()=>({
    type :types.LOGIN_USERS_START,

})
export const loginUsersError=(error)=>({
    type :types.LOGIN_USERS_ERROR,
    payload:error,
    
})
export const loginUsersSuccess =(users)=>({
    type :types.LOGIN_USERS_SUCCESS,
    payload:users,
})

//add user
export const addUserStart =(user)=>({
    type :types.ADD_USER_START,
    payload:user,
})
export const addUserError=(error)=>({
    type :types.ADD_USER_ERROR,
    payload:error,
    
})
export const addUserSuccess =()=>({
    type :types.ADD_USER_SUCCESS,
                // no payload bcoz directly redirect home page
})

//delete User
export const delUserStart =(userId)=>({
    type :types.DEL_USER_START,
    payload:userId,
})
export const delUserSuccess =(userId)=>({
    type :types.DEL_USER_SUCCESS,
    payload:userId,
                
})
export const delUserError=(error)=>({
    type :types.DEL_USER_ERROR,
    payload:error,
    
})

//edit User   userInfo is object that contains userId+all detail of user
export const editUserStart =(userInfo)=>({
    type :types.EDIT_USER_START,
    payload:userInfo,
})
export const editUserSuccess =()=>({
    type :types.EDIT_USER_SUCCESS,
          
})
export const editUserError=(error)=>({
    type :types.EDIT_USER_ERROR,
    payload:error,
    
})