// This is the page that will call the API calls for user Cars
const remoteURL = 'http://localhost:8088';

export default {
    //this will search the carUsers and get all cars from the car resource that belong to the user based on the expand
        getCarsbyUser(currentUserId) {
            console.log(`http://localhost:8088/cars/?userId=${currentUserId}`)
            return fetch(
                        `http://localhost:8088/carUser/?userId=${currentUserId}&_expand=car`
                    ).then(response => response.json());
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