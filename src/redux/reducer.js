import { actions } from './actions'
const initialState = {
    login: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.loginUser:
            return {login: true}
        default:
            return state;
    }
}

export default reducer;