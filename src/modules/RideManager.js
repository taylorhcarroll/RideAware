// This is the page that will call the API calls for Ride History and Dashboard Views
const remoteURL = 'http://localhost:8088';

export default {
	// getRidesbyUser(currentUserId) {
	// 	return fetch(`${remoteURL}/users?userName=${userName}`).then(result =>
	// 		result.json()
	// 	);
    // },
    getRidesWithKids(currentUserId) {
        //console.log(`http://localhost:8088/rides?userId=${currentUserId}&include=kids`)
        return fetch(
            `http://localhost:8088/rides?userId=${currentUserId}&include=kids&expand=user`
        ).then(response => response.json());
    },
    //http://localhost:8088/rides?&date=Oct 31st 19&sort=timeStamp&PickedUp=false
    getRidesbyDate(currentDate) {
        console.log("getRidesbyDate",`http://localhost:8088/rides?&date=${currentDate}&sort=timeStamp&PickedUp=false`)
        return fetch(
            `http://localhost:8088/rides?&date=${currentDate}&sort=timeStamp&PickedUp=false`
        ).then(response => response.json());
    },
    getAllCurrentRides(currentDate) {
        let RidesbyCurrentDate = [];
        return this.getRidesbyDate(currentDate)
            .then(data => {
                data.forEach(obj => {
                    RidesbyCurrentDate.push(obj.id)
                })
            })
            .then(() => {
                let searchString = '';
                RidesbyCurrentDate.forEach(id => {
                    searchString += `&id=${id}`
                })
                return fetch(
                    `http://localhost:8088/rides?include=kids&expand=user&expand=car${searchString}`
                ).then(response => response.json())
            })
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
        return fetch(`${remoteURL}/rides/${id}`, {
            method: 'DELETE'
        }).then(result => result.json());
    },
    updateRide(editedRide) {
		return fetch(`${remoteURL}/rides/${editedRide.id}`, {
			method: 'PATCH',
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
		return fetch(`${remoteURL}/kids_rides/${id}`, {
			method: 'DELETE'
		}).then(result => result.json());
    },
    addPassenger(passenger) {
        return fetch(`${remoteURL}/kids_rides/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(passenger)
        }).then(Response => Response.json())
    },
};
