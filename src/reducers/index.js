import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {
    FETCH_CASTS, FETCH_CASTS_FAILURE, FETCH_CASTS_SUCCESS,
    FETCH_MOVIE, FETCH_MOVIE_FAILURE, FETCH_MOVIE_SUCCESS, FETCH_MOVIES, FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_SUCCESS
} from "../consts";

const defaultState = {
    isFetching: false,
    item:{},
    error:{}
};

const defaultStateList = {
    isFetching: false,
    items:[],
    error:{}
};

const movieList = (state = defaultStateList, action) => {
    switch (action.type){
        case FETCH_MOVIES:
            return {...state, isFetching:true};
        case FETCH_MOVIES_SUCCESS:
            return {...state, isFetching:false, items:action.data};
        case FETCH_MOVIES_FAILURE:
            return {...state, isFetching:false, error:action.data};
        default:
            return state;
    }
};

const castList = (state = defaultStateList, action) => {
    switch (action.type){
        case FETCH_CASTS:
            return Object.assign({}, state, {
                isFetching:true
            });
        case FETCH_CASTS_SUCCESS:
            return Object.assign({}, state, {
                isFetching:false,
                items:action.data
            });
        case FETCH_CASTS_FAILURE:
            return Object.assign({}, state, {
                isFetching:false,
                error:action.data
            });
        default:
            return state;
    }
};

const movieDetail = (state = defaultState, action) => {
    switch (action.type){
        case FETCH_MOVIE:
            return Object.assign({}, state, {
                isFetching:true
            });
        case FETCH_MOVIE_SUCCESS:
            return Object.assign({}, state, {
                isFetching:false,
                item:action.data
            });
        case FETCH_MOVIE_FAILURE:
            return Object.assign({}, state, {
                isFetching:false,
                error:action.data
            });
        default:
            return state;
    }
};

const movieApp = combineReducers({
    movieList,
    movieDetail,
    castList,
    routing: routerReducer
});

export default movieApp;