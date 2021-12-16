import { take, takeEvery, takeLatest, put, call, all, delay, fork } from "redux-saga/effects";
import {
    loadUsersSuccess, loadUsersError,
    addUserSuccess, addUserError,
    delUserError, delUserSuccess,
    editUserSuccess,editUserError,
    loginUsersError,loginUsersSuccess
} from "./actions";

import * as types from "./actionTypes";
import { addUserApi, loadUsersApi, delUserApi ,editUserApi , loginUsersApi} from "./api";

function* onLoadUsersStartAsync() {
    try {
        const response = yield call(loadUsersApi);
        if (response.status === 200) {
            yield delay(500);
            yield put(loadUsersSuccess(response.data));
        }
    }
    catch (error) {
        yield put(loadUsersError(error.response.data));
    }
}

function* onLoginUsersStartAsync() {
    try {
        const response = yield call(loginUsersApi);
        if (response.status === 200) {
            yield delay(500);
            yield put(loginUsersSuccess(response.data));
        }
    }
    catch (error) {
        yield put(loginUsersError(error.response.data));
    }
}


function* onAddUserStartAsync({ payload }) {
    try {
        const response = yield call(addUserApi, payload);
        if (response.status === 200) {
            yield put(addUserSuccess(response.data));
        }
    }
    catch (error) {
        yield put(addUserError(error.response.data));
    }
}


function* onDelUserStartAsync(userId) {
    try 
    {
        const response = yield call(delUserApi, userId);
        if (response.status === 200) 
        {
            yield delay(500);
            yield put(delUserSuccess(userId));
        }
    }
    catch (error) {
        yield put(delUserError(error.response.data));
    }
}
    //id,records == destructure data
function* onEditUserStartAsync({payload : {id,records}}){
    try
    {
       const response= yield call(editUserApi,id,records);
       if (response.status === 200) 
       {
           yield delay(500);
           yield put(editUserSuccess());
       }
    }
    catch(error){
        yield put(editUserError(error.response.data));
    }
}



function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync)
}
function* onLoginUsers() {
    yield takeEvery(types.LOGIN_USERS_START, onLoginUsersStartAsync)
}

function* onAddUser() {
    yield takeLatest(types.ADD_USER_START, onAddUserStartAsync)
}
function* onDelUser() {
    while (true) {
        const { payload: userId } = yield take(types.DEL_USER_START);
        yield call(onDelUserStartAsync, userId);
    }
}
function* onEditUser() {
    yield takeLatest(types.EDIT_USER_START, onEditUserStartAsync)
}



const userSagas = [
    fork(onLoadUsers),
    fork(onLoginUsers),
    fork(onAddUser),
    fork(onDelUser),
    fork(onEditUser)
];



export default function* rootSaga() {
    yield all([...userSagas]);
}