export const UPDATE_USER = 'users:updateUser';


export function updateUser(newUser) {
	return {
		type: UPDATE_USER,
		payLoad: {
			user:newUser 
		}
	}
}