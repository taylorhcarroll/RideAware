const remoteURL = 'http://localhost:8088';

export default {
    getAllRides() {
        console.log(`http://localhost:8088/rides?include=kids`)
        return fetch(
            `http://localhost:8088/rides?&include=kids&expand=user`
        ).then(response => response.json());
    },
    getAllKids() {
        return fetch(
            `http://localhost:8088/kids?&include=rides`
        ).then(response => response.json());
    },
    completeRide(ride) {
		return fetch(`${remoteURL}/ride/${ride.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(ride)
		}).then(data => data.json());
	},
	getRide(id) {
		return fetch(`${remoteURL}/rides/${id}`).then(result => result.json());
    }
}