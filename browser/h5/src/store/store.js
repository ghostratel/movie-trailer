import { createStore } from "redux";

const reducer = (state = {name: 'aaaa'}, action) => {
	return state
}

export default createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
