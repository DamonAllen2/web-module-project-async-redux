import { SET_IS_FETCHING, GET_JOKE_ERROR, GET_JOKE_SUCCESS } from "../actions/JokesActions";

const initialState = {
    joke: {
        type: 'start',
        setup: 'Click the button below',
        punchline: 'for a joke!'
    },
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case  GET_JOKE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                joke: action.payload
            }
        case GET_JOKE_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}