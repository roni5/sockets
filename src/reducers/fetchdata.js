//import { FETCH_DATA } from '../actions';  case FETCH_DATA:
import * as types from '../constants/ActionTypes'

const fetchData =  (state = {}, action) => {
    switch(action.type) {
        case types.FETCH_DATA:
            return action.payload;
        default:
            return state;
    }
}


export default fetchData;