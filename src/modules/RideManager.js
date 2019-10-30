// This is the page that will call the API calls for Ride History and Dashboard Views
const remoteURL = 'http://localhost:8088';

export default {
	// getRidesbyUser(currentUserId) {
	// 	return fetch(`${remoteURL}/users?userName=${userName}`).then(result =>
	// 		result.json()
	// 	);
    // },
    getRidesWithKids(currentUserId) {
        console.log(`http://localhost:8088/rides?userId=${currentUserId}&include=kids`)
        return fetch(
            `http://localhost:8088/rides?userId=${currentUserId}&include=kids&expand=user`
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
	deleteRide(id) {
		return fetch(`${remoteURL}/rides/${id}`).then(result => result.json());
    },
    updateRide(editedRide) {
		return fetch(`${remoteURL}/rides/${editedRide.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(editedRide)
		}).then(data => data.json());
	},
	getRide(id) {
		return fetch(`${remoteURL}/rides/${id}`).then(result => result.json());
    },
    deletePassenger(id) {
		return fetch(`${remoteURL}/cars_users/${id}`, {
			method: 'DELETE'
		}).then(result => result.json());
    },
    addPassenger(kidId, rideId) {
        let kids_rides = {
            kidId: kidId,
            rideId: rideId
        }
        return fetch(`${remoteURL}/kids_rides/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(kids_rides)
        }).then(Response => Response.json())
    },
};
