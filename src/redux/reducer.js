import * as types from "./actionTypes";

const initialState = {
    users: [],

    loading: false,
    error: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_USERS_START:
        case types.LOAD_EDI_START:
        case types.LOGIN_USERS_START:
        case types.ADD_USER_START:
        case types.ADD_EDI_START:
        case types.DEL_USER_START:
        case types.EDIT_USER_START:
        case types.UPLOAD_IMG_START:
        case types.ADD_CHK_START:
            return {
                ...state,
                loading: true,

            }
        case types.LOAD_USERS_SUCCESS:
        case types.LOAD_EDI_SUCCESS:
        case types.LOGIN_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            }
        case types.ADD_USER_SUCCESS:
        case types.ADD_EDI_SUCCESS:
        case types.EDIT_USER_SUCCESS:
        case types.UPLOAD_IMG_SUCCESS:
        case types.ADD_CHK_SUCCESS:
            return {
                ...state,
                loading: false,

            }
        case types.DEL_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.filter((item) => item.id !== action.payload),
            }
        case types.LOAD_USERS_ERROR:
        case types.LOAD_EDI_ERROR:
        case types.ADD_USER_ERROR:
        case types.ADD_EDI_ERROR:
        case types.DEL_USER_ERROR:
        case types.EDIT_USER_ERROR:
        case types.UPLOAD_IMG_ERROR:
        case types.ADD_CHK_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default usersReducer;