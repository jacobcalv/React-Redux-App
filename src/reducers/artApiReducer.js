import {FETCH_ART_START, FETCH_ART_SUCCESS, FETCH_ART_ERROR} from '../actions'

const initialState = {
    art: null,
    error: null,
    loading: false,
}

export const artApiReducer = (state=initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case FETCH_ART_START:
            return {
                ...state, 
                loading: true
            };
        case FETCH_ART_SUCCESS: 
            return {
                ...state,
                art: action.payload,
                loading: false
            };
        case FETCH_ART_ERROR: 
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}