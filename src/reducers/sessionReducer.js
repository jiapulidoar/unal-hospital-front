//Unused in this project
import * as types from '../actions/actionTypes'; 

export default function sessionReducer(state = !!sessionStorage.jwt, action){
	switch(action.type){
		case types.LOG_IN_SUCCESS:
			return !!sessionStorage.jwt
		default:
			return state;
	}
}
