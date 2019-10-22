// This is the page that will call the API calls for user Cars
const remoteURL = 'http://localhost:8088';

export default {
	getUser(userName) {
		return fetch(`${remoteURL}/users?userName=${userName}`).then(result =>
			result.json()
		);
	},
	createUser(user) {
		return fetch(`${remoteURL}/users/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		}).then(Response => Response.json());
	},
	getUserById(id) {
		return fetch(`${remoteURL}/users/${id}`).then(result => result.json());
	}
};