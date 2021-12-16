import * as types from "./actionTypes";

const initialState = {
    users: [],
    loading: false,
    error: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_USERS_START:
        case types.LOGIN_USERS_START:   
        case types.ADD_USER_START:
        case types.DEL_USER_START:
        case types.EDIT_USER_START:
            return {
                ...state,
                loading: true,

            }
        case types.LOAD_USERS_SUCCESS:
        case types.LOGIN_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            }
        case types.ADD_USER_SUCCESS:
        case types.EDIT_USER_SUCCESS:
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
        case types.ADD_USER_ERROR:
        case types.DEL_USER_ERROR:
        case types.EDIT_USER_ERROR:
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