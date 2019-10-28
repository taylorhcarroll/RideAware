// This is the page that will call the API calls for user Cars
const remoteURL = 'http://localhost:8088';
//http://localhost:8088/carUser/?_expand=user

export default {
    //this will search the carUsers and get all cars from the car resource that belong to the user based on the expand
    getCarsbyUser(currentUserId) {
        console.log(`http://localhost:8088/carUser/?userId=${currentUserId}`)
        return fetch(
            `http://localhost:8088/carUser/?userId=${currentUserId}&_expand=car`
        ).then(response => response.json());
    },
    getUserbyCarId(currentUserId) {
        let currentUserCars = [];
        return this.getCarsbyUser(currentUserId)
            .then(data => {
                data.forEach(obj => {
                    currentUserCars.push(obj.carId)
                })
            })
            .then(() => {
                let searchString = '';
                currentUserCars.forEach(id => {
                    searchString += `&carId=${id}`
                })
                return fetch(
                    `http://localhost:8088/carUser/?_expand=user${searchString}`
                ).then(response => response.json())
            })
    },
    createCar(car, userId) {
        return fetch(`${remoteURL}/cars/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        }).then(Response => Response.json())
        .then((parsedResponse) => this.addDriver(userId, parsedResponse.id))

    },
    // getCarbyId(id) {
    //     return fetch(`${remoteURL}/cars/${id}`).then(result => result.json());
    // },
    deleteCar(id) {
		return fetch(`${remoteURL}/cars/${id}`, {
			method: 'DELETE'
		}).then(result => result.json());
    },
    deleteDriver(id) {
		return fetch(`${remoteURL}/carUser/${id}`, {
			method: 'DELETE'
		}).then(result => result.json());
    },
    updateCar(editedCar) {
		return fetch(`${remoteURL}/cars/${editedCar.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(editedCar)
		}).then(data => data.json());
	},
	getCar(id) {
		return fetch(`${remoteURL}/cars/${id}`).then(result => result.json());
    },
    addDriver(userId, carId) {
        let carUser = {
            userId: userId,
            carId: carId
        }
        return fetch(`${remoteURL}/carUser/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carUser)
        }).then(Response => Response.json())
    },
    findDriver(name) {
        return fetch(`${remoteURL}/users?name_like=${name}`).then(result => result.json())
    }
};