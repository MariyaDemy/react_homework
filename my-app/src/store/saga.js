import {takeLatest, call, put} from 'redux-saga/effects';
import {FETCH_USERS, FETCH_USER} from './actionTypes';
import {fetchUsersRequest, fetchUsersSuccess, fetchUsersError, fetchUserRequest, fetchUserSuccess,
fetchUserError} from './index.js';
import {APIfetchUsers, APIfetchUser} from './../api/index.js'

function* fetchUsersWorker(action) {
    yield put(fetchUsersRequest());
    try {
        let result = yield call(APIfetchUsers);
        yield put(fetchUsersSuccess(result));
    } catch(error) {
        yield put(fetchUsersError(error));
    }
}

function* fetchUserWorker(action) {
    yield put(fetchUserRequest());
    try {
        let result = yield call(APIfetchUser);
        yield put(fetchUserSuccess(result));
    } catch(error) {
        yield put(fetchUserError(error));
    }
}


export default function* rootSaga() {
    yield takeLatest(FETCH_USERS, fetchUsersWorker);
    yield takeLatest(FETCH_USER, fetchUserWorker);
}




