// 네 맞아요 ㅋㅋㅋ 그거 잘 응용하셔서 받아온 유저 화면에 뿌려보시고 요거 하시는동안 저는 웹팩 보일러플레이트 완성해서 올려드릴게요
// 감사합니다 ㅎㅎ 그럼 일단 이거 종료할게요!

// 그렇죠 재밋는 사실은 저 위에 커링을 타는것도 사실,
// 리덕스 미들웨어랑 결과적으로 같은 동작인데요. 문제는 이제
// 저걸 통제하려면 위의 코드가 엄청 복잡해지게되요 try, catch 뿐만아니라 if문도 엄청 들어가야하죠

// 그러면 이제 대충 컨셉은 이해하셨으니
// 한번 정리해보시고 ㅎㅎ 라우트 잡고 시도한번해보세요 ㅎㅎ
// 그 뭐냐 connect()는 써보셨나요? react-redux

// 구버전-thunk
// export const sample = values => async dispatch => {
//     const { data } = await getUser()
//     return {
//         type: 'SET_USER',
//         payload: data,
//     }
// }

// 신버전-saga
// export const newCode = values => {
//     return {
//         type: 'SET_USER',
//         payload: values,
//     }
// }
