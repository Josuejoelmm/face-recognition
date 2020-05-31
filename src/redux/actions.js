import Clarifai from '../api/index';
import calculateFaceLocation from '../utils/utilsFunctions';

export const actions = {
    UPDATE_INPUT_VALUE: 'UPDATE_INPUT_VALUE',
    DETECT_FACE: 'DETECT_FACE',
    SET_IMAGE_URL: 'SET_IMAGE_URL',
    DISPLAY_FACE_BOX: 'DISPLAY_FACE_BOX',
};

export function detectFace(imageUrl) {
    return dispatch => {
        return dispatch({
            type: actions.DETECT_FACE,
            payload: Clarifai.models.predict(
                "a403429f2ddf4b49b307e318f00e528b",
                imageUrl
            )
            .then(response => {
                dispatch(displayFaceBox(calculateFaceLocation(response)))
                return response;
            })
            .catch(error => dispatch(errorDetectingFace(error)))
        })
    }
};

export function errorDetectingFace(error) {
    return {
        type: actions.DISPLAY_FACE_BOX + "_ERROR",
        error
    }
}

export function updateInputValue(value) {
    return {
        type: actions.UPDATE_INPUT_VALUE,
        value
    }
};

export function setImageUrl(value) {
    return {
        type: actions.SET_IMAGE_URL,
        value
    }
};

export function displayFaceBox(value) {
    return {
        type: actions.DISPLAY_FACE_BOX,
        value
    }
};