import axios from 'axios'

export const SET_IS_FETCHING = 'SET_IS_FETCHING'
export const GET_JOKE = 'GET_JOKE'
export const GET_JOKE_SUCCESS = 'GET_JOKE_SUCCESS'
export const GET_JOKE_ERROR = 'GET_JOKE_ERROR'

export const getJoke = () => dispatch => {
    dispatch(setIsFetching(true));
    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then((res) => {
        console.log(res)
        const joke = res.data;
        dispatch(getJokeSuccess(joke));
    })
    .catch(err => dispatch(getJokeError('Request failed with a status code 404')))
}

const setIsFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, payload: isFetching}
}

const getJokeSuccess = (joke) => {
    return {type: GET_JOKE_SUCCESS, payload: joke}
}

const getJokeError = (err) => {
    return {type: GET_JOKE_ERROR, payload: err}
}