import * as types from '../constants/ActionTypes'

// const initialState = {};  state = initialState, action loading:true,


const websocket = (state = [], action) => {
	switch (action.type) {
         //return payload: websocket.onopen	
        case types.WEBSOCKET_OPEN:
        case types.WEBSOCKET_CONNECT:
        return state.concat([
            {
                websocket: action.openSocket,
            }
            ])
       
      default:
        return state
    }
}


export default websocket;