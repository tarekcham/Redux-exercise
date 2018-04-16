import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create our own Store
import { combineReducers, createStore } from 'redux';

// use providers to give our app access to the store
import {Provider} from 'react-redux'

// import the reducers 
import productsReducer from './reducers/productsReducer'
import userReducer from './reducers/userReducer'



const allReducers = combineReducers({
	products: productsReducer,
	user: userReducer

})

const store = createStore(allReducers, {
	// WITH SECOND argument we initial our state
	products: [{ name: 'iPhone'}],
	user: 'Michael'},
	/* the third arugment we add sotre enhancer "devTool redux", so basically we check if window has devtoolsExtension and if does we pass as third argument*/
	window.devToolsExtension && window.devToolsExtension()
);

console.log(store.getState())

const updateUserAction = {
	type: 'updateUser',
	payload: {
		user: "John"
	}
}
store.dispatch(updateUserAction);



ReactDOM.render(<Provider store={store}><App aRandomProps='whatever'/></Provider>, document.getElementById('root'));
registerServiceWorker();
