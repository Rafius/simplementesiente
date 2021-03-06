import { createStore, applyMiddleware } from "redux"
import axiosMiddleware from "redux-axios-middleware"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import axios from "axios"

import rootReducer from "../reducers"

const client = axios.create({
	baseURL: "https://simplementesiente-api.herokuapp.com/",
	responseType: "json"
})

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk, axiosMiddleware(client)))
)

export default store
