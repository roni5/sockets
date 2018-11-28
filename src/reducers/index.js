import { combineReducers } from "redux"
import messages from "./messages"
import users from "./users"
import websocket from "./websocket"
import fetchdata from "./fetchdata"
import websocketconnect from "./websocketconnect"

const chat = combineReducers({
	messages,
	users,
	websocket,
	websocketconnect,
	fetchdata
})

export default chat