import React, { Component } from 'react';
import AdminManager from '../../modules/AdminManager';
import moment from 'moment'

class AdminDash extends Component {
	state = {
		currentDate: '',
		kidsArray: [],
		availableKids: [],
		completedKidsArray: [],
		rides: []
	};

	// handleDelete = id => {
	// 	EventsManager.delete(id).then(() => {
	// 		this.props.getData();
	// 	});
	// };

	componentDidMount() {
		let newState = {}
		newState.currentDate = moment(new Date()).format("MMM Do YY")
		AdminManager.getAllKids().then((response) => {
			newState.kidsArray = response
			newState.availableKids = this.getIncompleteList(response, newState.curentDate)
			// console.log("Admin Dash New State", newState)
			this.getSomeKidsBruh(response, newState.currentDate)
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
		return kidsArray.map(kid => {
			console.log("kid", kid)
			kid.rides.filter(ride => {
				console.log("ride", ride)
				let todayRide = false
				console.log("ride date and current date", (ride.date === currentDate))
				// ride.forEach(rideEvent => {
				if (ride.date == currentDate) {
					todayRide = true
				}
				//return todayRide
				// });
				return todayRide
			})
		})
	}
	getSomeKidsBruh = (kidsArray, currentDate) => {
		console.log("getSomeKidsBruh KidsArray", kidsArray, "currentDate", currentDate)
		let availableKids = kidsArray.filter(kid => {
			 return kid.rides.some(ride => {
				 return ride.date !== currentDate
			});
		})
		console.log("available Kids from getSomeKidsBruh", availableKids)
	}
	getCompletedList = () => {


	}

	getInProgressList = () => {

	}
	//  {this.state.cars_users.map(singleCarUser => {
	// 	return singleCarUser.carId === this.props.cars_user.car.id ?
	// 			<div key={singleCarUser.id}>
	// 				<p>{singleCarUser.user.name}  </p>
	render() {
		return (
			<>
				<p>Hello this is the Admin Dashboard</p>
				<p>This where kids who do not have a ride will go.</p>
				{this.state.availableKids.map(availableKid => (
					<p>{availableKid.nickName}</p>))}
				<p>This is where current rides will go, with a button to complete them.</p>
				<p>This is where a list of kids who have been picked up will go.</p>
			</>
		);
	}
}
export default AdminDash;
