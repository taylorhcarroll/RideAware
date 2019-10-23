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

    // getArticles(currentUserId) {
    //     // let currentUserId = parseInt(sessionStorage.getItem('activeUser'));
    //     let currentUserFriends = [];
    //     return FriendsManager.getFriends(currentUserId)
    //         .then(data => {
    //             data.forEach(obj => {
    //                 currentUserFriends.push(obj.userId);
    //             });
    //         })
    //         .then(() => {
    //             let searchString = '';
    //             currentUserFriends.forEach(id => {
    //                 searchString += `&userId=${id}`;
    //             });
    //             return fetch(
    //                 `http://localhost:8088/articles/?userId=${currentUserId}${searchString}&_expand=user&_sort=date&_order=desc`
    //             ).then(response => response.json());
    //         });
    // },
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