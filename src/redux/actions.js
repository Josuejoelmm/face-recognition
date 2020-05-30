import Clarifai from '../api/index';

export const actions = {
    UPDATE_INPUT_VALUE: 'UPDATE_INPUT_VALUE',
    DETECT_FACE: 'DETECT_FACE',
};

export function detectFace(imageUrl) {
    return {
        type: actions.DETECT_FACE,
        payload: Clarifai.models.predict(
            "a403429f2ddf4b49b307e318f00e528b",
            imageUrl
        )
    };
};

export function updateInputValue(value) {
    return {
        type: actions.UPDATE_INPUT_VALUE,
        value
    }
};