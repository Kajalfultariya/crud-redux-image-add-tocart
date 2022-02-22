import { take, takeEvery, takeLatest, put, call, all, delay, fork } from "redux-saga/effects";
import {
    loadUsersSuccess, loadUsersError,
    loadEdiSuccess, loadEdiError,
    addUserSuccess, addUserError,
    addEdiSuccess, addEdiError,
    delUserError, delUserSuccess,
    editUserSuccess, editUserError,
    loginUsersError, loginUsersSuccess,
    uploadImgSuccess, uploadImgError,
    addChkSuccess, addChkError
} from "./actions";

import {
    addUserApi, loadUsersApi,
    delUserApi, editUserApi
    , loginUsersApi, uploadImgApi,
    addChkApi, addEdiApi ,loadEdiApi
} from "./api";

import * as types from "./actionTypes";


//get All User
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
function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync)
}


//Login User
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

function* onLoginUsers() {
    yield takeEvery(types.LOGIN_USERS_START, onLoginUsersStartAsync)
}

//Add User
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
function* onAddUser() {
    yield takeLatest(types.ADD_USER_START, onAddUserStartAsync)
}

//ADD EDITOR
function* onAddEdiStartAsync({ payload }) {
    try {
        const response = yield call(addEdiApi, payload);
        if (response.status === 200) {
            yield put(addEdiSuccess(response.data));
        }
    }
    catch (error) {
        yield put(addEdiError(error.response.data));
    }
}
function* onAddEdi() {
    yield takeLatest(types.ADD_EDI_START, onAddEdiStartAsync)
}

//get Editor
function* onLoadEdiStartAsync() {
    try {
        const response = yield call(loadEdiApi);
        if (response.status === 200) {
            yield delay(500);
            yield put(loadEdiSuccess(response.data));
        }
    }
    catch (error) {
        yield put(loadEdiError(error.response.data));
    }
}
function* onLoadEdi() {
    yield takeEvery(types.LOAD_EDI_START, onLoadEdiStartAsync)
}

//add checkbox
function* onAddChkStartAsync({ payload }) {
    try {
        const response = yield call(addChkApi, payload);
        if (response.status === 200) {
            yield put(addChkSuccess(response.data));
        }
    }
    catch (error) {
        yield put(addChkError(error.response.data));
    }
}

function* onAddChk() {
    yield takeLatest(types.ADD_CHK_START, onAddChkStartAsync)
}

//delete User
function* onDelUserStartAsync(userId) {
    try {
        const response = yield call(delUserApi, userId);
        if (response.status === 200) {
            yield delay(500);
            yield put(delUserSuccess(userId));
        }
    }
    catch (error) {
        yield put(delUserError(error.response.data));
    }
}
function* onDelUser() {
    while (true) {
        const { payload: userId } = yield take(types.DEL_USER_START);
        yield call(onDelUserStartAsync, userId);
    }
}


// Edit user    id,records == destructure data 
function* onEditUserStartAsync({ payload: { id, records } }) {
    try {
        const response = yield call(editUserApi, id, records);
        if (response.status === 200) {
            yield delay(500);
            yield put(editUserSuccess());
        }
    }
    catch (error) {
        yield put(editUserError(error.response.data));
    }
}
function* onEditUser() {
    yield takeLatest(types.EDIT_USER_START, onEditUserStartAsync)
}


//image upload
function* onUploadImgStartAsync({ payload }) {

    try {
        const response = yield call(uploadImgApi, payload);
        if (response.status === 200) {

            //  console.log(response.data)
            yield put(uploadImgSuccess(response.data));
        }
        console.log("Response", response.data)
    }
    catch (error) {
        yield put(uploadImgError(error.response.data));
    }
}
function* onUploadImg() {
    console.log("Start");
    yield takeLatest(types.UPLOAD_IMG_START, onUploadImgStartAsync)
}


const userSagas = [
    fork(onLoadUsers),
    fork(onLoginUsers),
    fork(onAddUser),
    fork(onDelUser),
    fork(onEditUser),
    fork(onUploadImg),
    fork(onAddChk),
    fork(onAddEdi),
    fork(onLoadEdi)
];



export default function* rootSaga() {
    yield all([...userSagas]);
}