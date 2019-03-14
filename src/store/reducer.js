import {
    DECODE_REQUEST_SUCCESS,
    ENCODE_REQUEST_SUCCESS,
    UPDATE_DECODED_MESSAGE,
    UPDATE_ENCODED_MESSAGE
} from "./actions";

const initialState = {
    password: '',
    decodedMessage: '',
    encodedMessage: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ENCODE_REQUEST_SUCCESS:
            return {
                ...state,
                encodedMessage: action.message
            }
        case DECODE_REQUEST_SUCCESS:
            return {
                ...state,
                decodedMessage: action.message
            }
        case UPDATE_DECODED_MESSAGE:
            return {
                ...state,
                decodedMessage: action.value
            }
        case UPDATE_ENCODED_MESSAGE:
            return {
                ...state,
                encodedMessage: action.value
            }
        default: return state
    }
}

export default reducer;