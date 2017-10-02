import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Route, Router, hashHistory, IndexRoute} from 'react-router';
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux';

import './index.css';
import App from "./App";
import movieApp from './reducers/index';
import {MoviesContainer, MovieDetails} from './containers';

const routeMiddleware = routerMiddleware(hashHistory);
let store = createStore(movieApp,
    composeWithDevTools(applyMiddleware(thunkMiddleware, routeMiddleware)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={MoviesContainer} />
                <Route path="/movie/:id" component={MovieDetails}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('root'));
