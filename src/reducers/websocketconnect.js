import * as types from '../constants/ActionTypes'

// const initialState = {};  state = initialState, action loading:true,


const websocketconnect = (state = [], action) => {
	switch (action.type) {
         //return payload: websocket.onopen	
        case types.WEBSOCKET_CONNECT:
        return state.concat([
            {
                websocket: action.setupWebsockets,
            }
            ])
       
      default:
        return state
    }
}


export default websocketconnect;

