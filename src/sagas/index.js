import { delay } from 'redux-saga';
import { put, takeEvery, all, fork, take } from 'redux-saga/effects';
import * as api from '../services';

export function* helloSaga() {
    console.log('Hello Sagas!')
}

export function* incrementAsync () {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync () {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* decrementAsync () {
    yield delay(1000)
    yield put({ type: 'DECREMENT' })
}

export function* watchDecrementAsync () {
    yield takeEvery('DECREMENT_ASYNC', decrementAsync)
}

// const takeEvery = (patternOrChannel, saga, ...args) => fork(
//     function*() {
//         while (true) {
//             const action = yield take(patternOrChannel)
//             yield fork(saga, ...args.concat(action))
//         }
// })

export default function* rootSaga () {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        watchDecrementAsync(),
    ])
}

