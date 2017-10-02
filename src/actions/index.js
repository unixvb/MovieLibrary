import {
    API_KEY,
    API_URL, FETCH_CASTS, FETCH_CASTS_FAILURE, FETCH_CASTS_SUCCESS,
    FETCH_MOVIE, FETCH_MOVIE_FAILURE, FETCH_MOVIE_SUCCESS, FETCH_MOVIES, FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_SUCCESS, SEND_RATING, SEND_RATING_FAILURE, SEND_RATING_SUCCESS
} from "../consts";

function fetchMovies() {
    return {
        type: FETCH_MOVIES
    };
}

function fetchMovie() {
    return {
        type: FETCH_MOVIE
    };
}

function fetchCasts() {
    return {
        type: FETCH_CASTS
    };
}

function sendRating() {
    return {
        type: SEND_RATING
    };
}

function sendRatingSuccess(data) {
    return {
        type: SEND_RATING_SUCCESS,
        data
    };
}

function sendRatingFail(error) {
    return {
        type: SEND_RATING_FAILURE,
        error
    };
}

function fetchCastsSuccess(data) {
    return {
        type: FETCH_CASTS_SUCCESS,
        data
    };
}

function fetchCastsFail(error) {
    return {
        type: FETCH_CASTS_FAILURE,
        error
    };
}

function fetchMoviesSuccess(data) {
    return {
        type: FETCH_MOVIES_SUCCESS,
        data
    };
}

function fetchMoviesFail(error) {
    return {
        type: FETCH_MOVIES_FAILURE,
        error
    };
}

function fetchMovieSuccess(data) {
    return {
        type: FETCH_MOVIE_SUCCESS,
        data
    };
}

function fetchMovieFail(error) {
    return {
        type: FETCH_MOVIE_FAILURE,
        error
    };
}


export function fetchMoviesList() {
    return function (dispatch) {
        dispatch(fetchMovies());
        return fetch(API_URL + 'discover/movie' + API_KEY)
            .then(response => response.json())
            .then(json => json.results)
            .then(data => dispatch(fetchMoviesSuccess(data)))
            .catch(error => dispatch(fetchMoviesFail(error)));
    }
}

export function fetchMovieDetail(id) {
    return function (dispatch) {
        dispatch(fetchMovie());
        return fetch(API_URL + 'movie/' + id + API_KEY)
            .then(response => response.json())
            .then(data => dispatch(fetchMovieSuccess(data)))
            .catch(error => dispatch(fetchMovieFail(error)))
    }
}

export function fetchCastList(id) {
    return function (dispatch) {
        dispatch(fetchCasts());
        return fetch(API_URL + 'movie/' + id + '/casts' + API_KEY)
            .then(response => response.json())
            .then(json => json.cast)
            .then(data => dispatch(fetchCastsSuccess(data)))
            .catch(error => dispatch(fetchCastsFail(error)))
    }
}

export function sendMovieRating(id, value) {
        return fetch(API_URL + 'movie/' + id + '/rating' + API_KEY, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                value: value
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
}