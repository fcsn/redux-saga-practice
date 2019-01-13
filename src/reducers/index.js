const defaultState = {
    user: null,
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        // case 'INCREMENT':
        //     return state + 1
        // case 'DECREMENT':
        //     return state - 1
        // case 'INCREMENT_ASYNC':
        //     return state + 1
        // case 'DECREMENT_ASYNC':
        //     return state - 1
        case 'SET_USER':
            return {
                ...state,
                user: action.data,
            }
        default:
            return state;
    }
}

export default reducer;
