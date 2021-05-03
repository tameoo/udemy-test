export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const setUserNameByEmail = (name) => {
    return {
        type: 'SET_USER_NAME',
        payload: name
    }
}
