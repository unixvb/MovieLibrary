import {
    API_KEY,
    API_URL, FETCH_CASTS, FETCH_CASTS_FAILURE, FETCH_CASTS_SUCCESS,
    FETCH_MOVIE, FETCH_MOVIE_FAILURE, FETCH_MOVIE_SUCCESS, FETCH_MOVIES, FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_SUCCESS
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
        return fetch(API_URL + '/movie/' + id + API_KEY)
            .then(response => response.json())
            .then(data => dispatch(fetchMovieSuccess(data)))
            .catch(error => dispatch(fetchMovieFail(error)))
    }
}

export function fetchCastList(id) {
    return function (dispatch) {
        dispatch(fetchCasts());
        return fetch(API_URL + '/movie/' + id + '/casts' + API_KEY)
            .then(response => response.json())
            .then(json => json.cast)
            .then(data => dispatch(fetchCastsSuccess(data)))
            .catch(error => dispatch(fetchCastsFail(error)))
    }
}