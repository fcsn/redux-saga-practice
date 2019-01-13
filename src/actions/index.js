export const increment = () => ({
    type: 'INCREMENT',
});
export const decrement = () => ({
    type: 'DECREMENT',
});
export const incrementAsync = () => ({
    type: 'INCREMENT_ASYNC',
});
export const decrementAsync = () => ({
    type: 'DECREMENT_ASYNC',
});

export const fetchUser = userName => ({
    type: 'FETCH_USER',
    payload: userName
});

export const fetchUserError = () => ({
    type: 'FETCH_USER_ERROR',
});

