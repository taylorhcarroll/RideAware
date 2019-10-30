// This is the page that will call the API calls for Ride History and Dashboard Views
const remoteURL = 'http://localhost:8088';

export default {
	// getRidesbyUser(currentUserId) {
	// 	return fetch(`${remoteURL}/users?userName=${userName}`).then(result =>
	// 		result.json()
	// 	);
    // },
    getRidesbyUser(currentUserId) {
        console.log(`http://localhost:8088/rides/?userId=${currentUserId}`)
        return fetch(
            `http://localhost:8088/rides/?userId=${currentUserId}&_expand=car`
        ).then(response => response.json());
    },
	createRide(ride) {
		return fetch(`${remoteURL}/rides/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(ride)
		}).then(Response => Response.json());
	},
	getUserById(id) {
		return fetch(`${remoteURL}/users/${id}`).then(result => result.json());
	}
};


// http://localhost:8088/rides?userId=1
