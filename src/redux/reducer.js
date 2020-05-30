import { actions } from './actions'
const initialState = {
    inputUrl: 'https://i.pinimg.com/originals/6d/0a/18/6d0a1809c5f988963e9cdff3fa5be6d2.jpg',
    faceDetectedData: {},
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.UPDATE_INPUT_VALUE:
            return {
                ...state, 
                inputUrl: action.value
            }
        case actions.DETECT_FACE + "_START":
            return {
                ...state, 
                isLoading: true
            }
        case actions.DETECT_FACE + "_SUCCESS":
            return {
                ...state, 
                faceDetectedData: action.payload.outputs[0],
                isLoading: false
            }
        default:
            return state;
    }
}

export default reducer;