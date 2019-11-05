import React, { Component } from 'react';
import AdminManager from '../../modules/AdminManager';
import moment from 'moment'
import RideManager from '../../modules/RideManager';

class AdminDash extends Component {
	state = {
		currentDate: '',
		kidsArray: [],
		availableKids: [],
		completedKids: [],
		currentRides: []
	};

	componentDidMount() {
		let newState = {}
		newState.currentDate = moment(new Date()).format("MMM Do YY")
		AdminManager.getAllKids().then((response) => {
			newState.kidsArray = response
			newState.availableKids = this.getIncompleteList(response, newState.currentDate)
			// console.log("Admin Dash New State", newState)
			newState.completedKids = this.getCompletedList(response, newState.currentDate)
		}).then(() => {
			console.log("newState.currentDate", newState.currentDate)
			this.getCurrentRides(newState.currentDate)
				.then((response) => {
					// newState.currentRides = this.getInProgressList(newState.currentDate)
					this.setState({
						currentDate: newState.currentDate,
						availableKids: newState.availableKids,
						completedKids: newState.completedKids,
						currentRides: response
					})
				})
		})
	}

	getKidsList = () => {
		AdminManager.getAllKids()
			.then((response) => {
				console.log("kids list for admin DASH", response)
				// this.setState({
				// 	kidsArray: response,
				// })
			})
	}
	getIncompleteList = (kidsArray, currentDate) => {
		//console.log("getSomeKidsBruh KidsArray", kidsArray, "currentDate", currentDate)
		let availableKids = kidsArray.filter(kid => {
			return kid.rides.every(ride => {
				return ride.date === !currentDate
			});
		})
		console.log("availableKids from getSomeKidsBruh", availableKids)
		return availableKids
	}
	getCurrentRides = (currentDate) => {
		return RideManager.getAllCurrentRides(currentDate)
			// .then((response) => {
			// 	console.log("Test Current rides calls", response)
			// })
	}
	// getIncompleteList = (kidsArray, currentDate) => {
	// 	return kidsArray.map(kid => {
	// 		console.log("kid", kid)
	// 		kid.rides.filter(ride => {
	// 			console.log("ride", ride)
	// 			let todayRide = false
	// 			console.log("ride date and current date", (ride.date === currentDate))
	// 			// ride.forEach(rideEvent => {
	// 			if (ride.date == currentDate) {
	// 				todayRide = true
	// 			}
	// 			//return todayRide
	// 			// });
	// 			return todayRide
	// 		})
	// 	})
	// }
	getCompletedList = (kidsArray, currentDate) => {
		//console.log("getSomeKidsBruh KidsArray", kidsArray, "currentDate", currentDate)
		let completedKids = kidsArray.filter(kid => {
			return kid.rides.some(ride => {
				return ride.date === currentDate && ride.PickedUp
			});
		})
		console.log("completedKids from getSomeKidsBruh", completedKids)
		return completedKids
	}

	// getCompletedList = (kidsArray, currentDate) => {
	// 	//console.log("getSomeKidsBruh KidsArray", kidsArray, "currentDate", currentDate)
	// 	let completedKids = kidsArray.filter(kid => {
	// 		return kid.rides.some(ride => {
	// 			return ride.date === currentDate && ride.PickedUp
	// 		});
	// 	})
	// 	console.log("completedKids from getSomeKidsBruh", completedKids)
	// 	return completedKids
	// }

	// getInProgressList = (currentDate) => {
	// 	RideManager.getAllCurrentRides(currentDate)
	// 		.then((currentRides) => {
	// 		console.log("getInProgressList", currentRides)
	// 		return currentRides

	// 	})
	// }
	render() {
		return (
			<>
				<p>Hello this is the Admin Dashboard</p>
				<h5>This where kids who do not have a ride will go.</h5>
				{this.state.availableKids.map(availableKid => (
					<p>{availableKid.nickName}</p>))}
				<h5>This is where current rides will go, with a button to complete them.</h5>
				{this.state.currentRides.map(currentRide => (
					<p>{currentRide.user.name}</p>))}
				<h5>This is where a list of kids who have been picked up will go.</h5>
				{this.state.completedKids.map(completedKid => (
					<p>{completedKid.nickName}</p>))}
			</>
		);
	}
}
export default AdminDash;


//
// list 1
// All kids who have not had a ride generated with today's timestamp
// meaning: where the fuck are their parents at?
// if the !kids.ride === currentDate

// this list would have all kids who do not have a ride that has the current date.
// if it does, put it on the current list

// list2
// current rides not completed

// list3
// list of kids who have been picked up don't worry about them noe