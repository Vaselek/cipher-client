import axios from '../axios-cipher'

export const ENCODE_REQUEST_SUCCESS = 'ENCODE_REQUEST_SUCCESS';
export const DECODE_REQUEST_SUCCESS = 'DECODE_REQUEST_SUCCESS';
export const UPDATE_DECODED_MESSAGE = 'UPDATE_DECODED_MESSAGE';
export const UPDATE_ENCODED_MESSAGE = 'UPDATE_ENCODED_MESSAGE';

export const encodeRequestSuccess = (message) => ({type: 'ENCODE_REQUEST_SUCCESS', message});
export const decodeRequestSuccess = (message) => ({type: 'DECODE_REQUEST_SUCCESS', message});

export const encodeRequest = (data) => {
    return dispatch => {
        return axios.post('./encode', data).then(
            response => {
                dispatch(encodeRequestSuccess(response.data.encoded))
            }
        )
    }
}

export const decodeRequest = (data) => {
    return dispatch => {
        return axios.post('./decode', data).then(
            response => dispatch(decodeRequestSuccess(response.data.decoded))
        )
    }
}

export const updateDecodedMessage = (value) => {
    return {type: 'UPDATE_DECODED_MESSAGE', value}
}
export const updateEncodedMessage = (value) => ({type: 'UPDATE_ENCODED_MESSAGE', value})
