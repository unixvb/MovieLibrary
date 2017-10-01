import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import movieApp from './reducers/index';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {Route, Router, hashHistory, IndexRoute} from 'react-router';
import App from "./App";
import MoviesContainer from "./containers/movies-list.container";
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux';

const routeMiddleware = routerMiddleware(hashHistory);
let store = createStore(movieApp,
    composeWithDevTools(applyMiddleware(thunkMiddleware, routeMiddleware)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={MoviesContainer} />
                {/*<Route path="/movie/:id" component={MovieDetail}/>*/}
            </Route>
        </Router>
    </Provider>, document.getElementById('root'));
