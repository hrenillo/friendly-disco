import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/app'
import About from './components/about'
import Demo from './components/demo/demo.js'
import Noname from './components/noname.js'
import {IndexRoute, Route, Router, browserHistory} from 'react-router';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './components/demo/reducers/timerReducer'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
    (<Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={About} />
                <Route path="demo" component={Demo} />
                <Route path="noname" component={Noname} />
            </Route>
        </Router>
    </Provider>)
    , document.getElementById('root')
)
