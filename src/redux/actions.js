import Clarifai from '../api/index';

export const actions = {
    UPDATE_INPUT_VALUE: 'UPDATE_INPUT_VALUE',
    DETECT_FACE: 'DETECT_FACE',
    SET_IMAGE_URL: 'SET_IMAGE_URL',
    SHOW_MODAL: 'SHOW_MODAL',
};

export function detectFace(imageUrl) {
    return dispatch => {
        return dispatch({
            type: actions.DETECT_FACE,
            payload: Clarifai.models.predict(
                "a403429f2ddf4b49b307e318f00e528b",
                imageUrl
            )
        })
    }
};

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

export function showModal() {
    return {
        type: actions.SHOW_MODAL,
    }
};