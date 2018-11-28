import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import ReduxPromise from 'redux-promise';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setupSocket from './sockets'
import reducers from './reducers'
import handleNewMessage from './sagas'
import username from './utils/name'

/**
 * (Psst! This is also the place where you would be encompassing 
 * your entire application in a BrowserRouter
 */

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	reducers,
	applyMiddleware(sagaMiddleware, ReduxPromise)
)

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, {socket, username})

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
	);
registerServiceWorker();



