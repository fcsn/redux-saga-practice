import { delay } from 'redux-saga';
import { put, takeEvery, takeLatest, all, call, fork, take } from 'redux-saga/effects';
import * as api from '../services';

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

function* getUser(action) {
    console.log(action.payload)
    try {
        const { data } = yield call(api.getUser, action.payload) // 아마 이렇게 안에 .data로 들어올거에요
        // 이제 사실상 구현은 다 하신거구요
        // 정리를 좀 해보면
        yield put({type: 'SET_USER', data})
    } catch(error) {
        yield put({type: 'FETCH_USER_ERROR', error})
    }
}

// function* getUserWatch() {
//     yield takeEvery('FETCH_USER', getUser)
// }


// const takeEvery = (patternOrChannel, saga, ...args) => fork(
//     function*() {
//         while (true) {
//             const action = yield take(patternOrChannel)
//             yield fork(saga, ...args.concat(action))
//         }
// })


// 스텝 별로 정리해볼게요.

// 1. 해당되는 페이지 컴포넌트에서 dispatch({ type: 'FETCH_USER', payload: userId })를 한다.
// 2. 이 액션이 리덕스로 들어오다가 리듀서 함수를 실행하기전에 미들웨어에 걸려 사가로 들어온다.
// 3. 루트 사가가 takeLatest('FETCH_USER', getUser)를 한다.
//    (takeEvery가 아니고 takeLatest이걸로 하는 이유는 사가가 자동으로 앞의 태스크들을 캔슬하도록 하기 위해서에요.)
// 4. getUser 실행 -> 내부에서 서비스를 yield -> 성공하면 yield put({ type: 'SET_USER', payload: data })
// 5. 그러면 아까 스테이트의 user가 바뀝니다.
// 6. 커넥트를 이용해서 컴포넌트에 연결
// * 사가가 제공하는 call을 이용하므로, 이 함수의 반환 객체에 request[CANCEL] = source.cancel로 넣어놓은 cancel 함수로
//   takeLatest가 이전에 take했던 태스크들을 캔슬할 때, 통신까지 자동으로 캔슬됩니다.


// 그러면 이제 ㅎㅎ 라우트를 구성하시고 그 페이지마다 도착했을때 dispatch({ type: 'FETCH_USER', payload: userId }) 요걸하는 페이지를 만들어봐요
// 그보다 사가는 금방 적응하신거같군요
// 리덕스는 원래 사용하셨엇죠? ㅎㅎㅎ 일단 뭐 이거는
// http 통신은 이제 미들웨어에서 훔쳐와서 사가에서 처리한다 라고 생각하시면되구
// 리듀서에서는 순수하게 스테이트를 변경하는 액션만 받고
// actions에서도 순수하게 액션만을 반환하는 액션 크리에이터나 액션 객체만을 작성한다.
// 요 컨셉만 이해하셔도 충분합니다. 아뇨 페이로드는 이제 인자로 받거나 하는 방식으로 하죠 예를 들면

export default function* rootSaga () {
    yield all([
        takeLatest('FETCH_USER', getUser),
    ])
}
//
