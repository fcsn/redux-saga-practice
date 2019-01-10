const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'INCREMENT_ASYNC':
            return state + 1
        case 'DECREMENT_ASYNC':
            return state - 1
        default:
            return state;
    }
}

export default reducer;
