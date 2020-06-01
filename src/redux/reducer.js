import { actions } from './actions';

const initialState = {
    inputUrl: 'https://i.pinimg.com/originals/6d/0a/18/6d0a1809c5f988963e9cdff3fa5be6d2.jpg',
    imageUrl: '',
    faceDetectedData: {},
    faceDetecteError: '',
    isLoading: false,
    isModalOpen: false,
    isLogged: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.UPDATE_INPUT_VALUE:
            return {
                ...state, 
                inputUrl: action.value
            }
        case actions.SET_IMAGE_URL:
            return {
                ...state, 
                imageUrl: action.value
            }
        case actions.DETECT_FACE + "_START":
            return {
                ...state,
                faceDetectedData: {},
                isLoading: true
            }
        case actions.DETECT_FACE + "_SUCCESS":
            return {
                ...state, 
                inputUrl: '',
                faceDetectedData: action.payload.outputs[0],
                isLoading: false
            }
        case actions.DETECT_FACE + "_ERROR":
            console.log(action.error, 'SHOW ERROR');
            
            return {
                ...state, 
                // faceDetectedData: action.payload.outputs[0],
                // isLoading: false,
                // faceDetecteError: action.payload.message
            }
        case actions.SHOW_MODAL:
            return {
                ...state,
                isModalOpen: !state.isModalOpen
            }
        default:
            return state;
    }
}

export default reducer;