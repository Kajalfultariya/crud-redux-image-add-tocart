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


//upload image

export const uploadImgStart =(users)=>({
    type :types.UPLOAD_IMG_START,
    payload:users,
})
export const uploadImgError=(error)=>({
    type :types.UPLOAD_IMG_ERROR,
    payload:error,
    
})
export const uploadImgSuccess =()=>({
    type :types.UPLOAD_IMG_SUCCESS,
                // no payload bcoz directly redirect home page
})

//checkbox
export const addChkStart =(user)=>({
    type :types.ADD_CHK_START,
    payload:user,
})
export const addChkError=(error)=>({
    type :types.ADD_CHK_ERROR,
    payload:error,
    
})
export const addChkSuccess =()=>({
    type :types.ADD_CHK_SUCCESS,
                // no payload bcoz directly redirect home page
})


//Editor Add
export const addEdiStart =(user)=>({
    type :types.ADD_EDI_START,
    payload:user,
})
export const addEdiError=(error)=>({
    type :types.ADD_EDI_ERROR,
    payload:error,
    
})
export const addEdiSuccess =()=>({
    type :types.ADD_EDI_SUCCESS,
                // no payload bcoz directly redirect home page
})

//eDITOR GET
export const loadEdiStart =()=>({
    type :types.LOAD_EDI_START,

})
export const loadEdiError=(error)=>({
    type :types.LOAD_EDI_ERROR,
    payload:error,
    
})
export const loadEdiSuccess =(users)=>({
    type :types.LOAD_EDI_SUCCESS,
    payload:users,
})