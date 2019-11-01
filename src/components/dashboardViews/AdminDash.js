import React, { Component } from 'react';
import AdminManager from '../../modules/AdminManager';
import moment from 'moment'

class AdminDash extends Component {
	state = {
		currentDate: '',
		kidsArray: [],
		availableKidsArray: [],
		completedKidsArray: [],
		rides: []
	};

	// handleDelete = id => {
	// 	EventsManager.delete(id).then(() => {
	// 		this.props.getData();
	// 	});
	// };

	componentDidMount() {
		this.setCurrentDate()
		this.getKidsList()
	}

	setCurrentDate = () => {
		let currentDate = moment(new Date()).format("MMM Do YY")
		console.log("current Date", currentDate)
		this.setState({
			curentDate: currentDate
		})
	}

	getKidsList = () => {
		AdminManager.getAllKids()
			.then((response) =>
				this.setState({
					kidsArray: response,
				}))
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
				{this.state.kidsArray.map(kid => {
					console.log("kid", kid)
					const availableKidsArray = kid.rides.filter(ride => {
						console.log("ride", ride)
						let todayRide = false
						console.log("ride date and current date", (ride.date === this.state.curentDate))
						// ride.forEach(rideEvent => {
						if (ride.date === this.state.curentDate) {
							todayRide = true
						}
						//return todayRide
						// });
						return todayRide
					})
					console.log(availableKidsArray, "availableKidsArray")
					// // Array to contain all the New York businesses
					// const newYorkBusinesses = businesses.filter(business => {
					// 	let inNewYork = false

					// 	if (business.addressStateCode === "NY") {
					// 		inNewYork = true
					// 	}

					// 	return inNewYork
					// // })
					// kid.date.filter(this.state.currentDate) === true ?
					// <p>Hit!</p> : ""
					// kid.rides.map(ride => {
					console.log("admin dash kid", kid)
					// return ride.date.includes(this.state.curentDate) === true  ?
					// <p>{kid.nickName}</p> : ""
					//                 <div key={ride.id}>Name: {}</div>
				})
				}this.setState({
					availableKidsArray: availableKidsArray
				})
				)}
			<p>This is where current rides will go, with a button to complete them.</p>
				<p>This is where a list of kids who have been picked up will go.</p>
			</>
		);
	}
}


// return (
// 	<>
// 	<p>Hello this is the Admin Dashboard</p>
// 	<p>This where kids who do not have a ride will go.</p>
// 	{this.state.kidsArray.map(kid => {
// 		return kid.date.filter(this.state.currentDate) === true ?
// 		<p>Hit!</p> : ""
// 		kid.rides.map(ride => {
// 		console.log("admin dash kid ride", ride)
// 		return ride.date.includes(this.state.curentDate) === true  ?
// 		<p>{kid.nickName}</p> : ""
// 						<div key={ride.id}>Name: {}</div>
// 		})
// 	})}
// 	<p>This is where current rides will go, with a button to complete them.</p>
// 	<p>This is where a list of kids who have been picked up will go.</p>
// 	</>
// );
// }
// }
export default AdminDash;
