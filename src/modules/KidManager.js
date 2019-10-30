// This is the page that will call the API calls for user Kids
const remoteURL = 'http://localhost:8088';
//http://localhost:8088/kidGuardian/?_expand=user

export default {
    //this will search the kidGuardians and get all kids from the kid resource that belong to the user based on the expand
    getKidsbyUser(currentUserId) {
        console.log(`http://localhost:8088/kids_users/?userId=${currentUserId}`)
        return fetch(
            `http://localhost:8088/kids_users/?userId=${currentUserId}&expand=kid`
        ).then(response => response.json());
    },
    getUserbyKidId(currentUserId) {
        let currentUserKids = [];
        return this.getKidsbyUser(currentUserId)
            .then(data => {
                data.forEach(obj => {
                    currentUserKids.push(obj.kidId)
                })
            })
            .then(() => {
                let searchString = '';
                currentUserKids.forEach(id => {
                    searchString += `&kidId=${id}`
                })
                return fetch(
                    `http://localhost:8088/kids_users/?expand=user${searchString}`
                ).then(response => response.json())
            })
    },
    createKid(kid, userId) {
        return fetch(`${remoteURL}/kids/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(kid)
        }).then(Response => Response.json())
        .then((parsedResponse) => this.addGuardian(userId, parsedResponse.id))

    },
    deleteKid(id) {
		return fetch(`${remoteURL}/kids/${id}`, {
			method: 'DELETE'
		}).then(result => result.json());
    },
    deleteGuardian(id) {
		return fetch(`${remoteURL}/kids_users/${id}`, {
			method: 'DELETE'
		}).then(result => result.json());
    },
    updateKid(editedKid) {
		return fetch(`${remoteURL}/kids/${editedKid.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(editedKid)
		}).then(data => data.json());
	},
	getKid(id) {
		return fetch(`${remoteURL}/kids/${id}`).then(result => result.json());
    },
    addGuardian(userId, kidId) {
        let kidGuardian = {
            userId: userId,
            kidId: kidId
        }
        return fetch(`${remoteURL}/kids_users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(kidGuardian)
        }).then(Response => Response.json())
    },
    findGuardian(name) {
        return fetch(`${remoteURL}/users?name_like=${name}`).then(result => result.json())
    }
};