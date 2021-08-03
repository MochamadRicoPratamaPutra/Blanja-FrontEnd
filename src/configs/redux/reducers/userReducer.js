// reducer user
const initialState = {
    profile: {},
    error: null
}
const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                profile: action.payload
            }
        case 'LOGIN_USER_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'SIGNUP_USER':
            return {
                ...state,
                profile: action.payload
            }
        case 'FORGOT_USER':
            return {
                ...state,
                profile: action.payload
            }
        default:
            return state
    }
}
export default userReducer