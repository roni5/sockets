import * as types from '../constants/ActionTypes'

let nextMessageId = 0
let nextUserId = 0
// var host = 'localhost';
// var port = 8181;


// export const setupWebsockets = ({ host, port }) =>
//   new Promise((resolve) => {
//     const webSocket = new WebSocket(`ws://${host}:${port}`);
//     const receive = (onMessageCb) => {
//       webSocket.onmessage = (event) => onMessageCb(JSON.parse(event.data));
//     };
//     const send = (type, payload) =>    
//     webSocket.onopen = () => resolve({ send, receive });

//   });
// setupWebsockets();


// default function to display redux action format
export function fetchData() {
	let  url = 'ws://localhost:9000'
    // action object format being return to a reducer
    return {
        type: types.FETCH_DATA,
        payload: url
    }
}

export const webSocketConnect = (event, url) => ({
	type : types.WEBSOCKET_CONNECT,
	event,
	url
})

export const addMessage = (message, author) => ({
	type: types.ADD_MESSAGE,
	id: nextMessageId++,
	message,
	author
})
  //: 'ws://localhost:8989'  url = localhost // url = 'ws://localhost:8989'
export const openSocket = (event, url  ) => ({
	type: types.WEBSOCKET_OPEN,
	event,
	url
	
  });
export const addUser = name => ({
	type: types.ADD_USER,
	id: nextUserId++,
	name
})
// payload: {
// 	timestamp: new Date(),
// 	  event,
// 	  url: 'ws://localhost:8989'
//   }

export const messageReceived = (message, author) => ({
	type : types.MESSAGE_RECEIVED,
	id: nextMessageId++,
	message,
	author
})

export const populateUsersList = users => ({
	type: types.USERS_LIST,
	users
})







