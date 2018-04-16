import { UPDATE_USER } from '../actions/user-actions'

// Create reducer function 
// reducer listens to every action arrives to the staror
export default function userReducer(state= '', {type, payLoad}){
	switch (type) {
		case UPDATE_USER:
			return payLoad.user; 
	   default:
	  		return state;
	  	}
}