import {delay} from 'redux-saga'
import {put, takeEvery} from 'redux-saga/effects'

export function* helloSaga() {
    console.log('Hello Sagas!')
}

export function* incrementAsync() {
    yield delay(1000)
    yield put({type: 'INCREMENT'})
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}