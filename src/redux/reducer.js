const initialState = {
    user: null,
    name: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'SET_USER_NAME':
            return {
                ...state,
                name: action.payload
            }

        default :
            return state
    }
}
