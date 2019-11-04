import React, { Component } from 'react';
import AdminManager from '../../modules/AdminManager';
import moment from 'moment'

class AdminDash extends Component {
	state = {
		currentDate: '',
		kidsArray: [],
		availableKids: [],
		completedKids: [],
		rides: []
	};

	componentDidMount() {
		let newState = {}
		newState.currentDate = moment(new Date()).format("MMM Do YY")
		AdminManager.getAllKids().then((response) => {
			newState.kidsArray = response
			newState.availableKids = this.getIncompleteList(response, newState.curentDate)
			// console.log("Admin Dash New State", newState)
			newState.completedKids = this.getCompletedList(response, newState.currentDate)
			this.setState({
				currentDate: newState.currentDate,
				availableKids: newState.availableKids,
				completedKids: newState.completedKids
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
			return kid.rides.some(ride => {
				return ride.date !== currentDate
			});
		})
		console.log("availableKids from getSomeKidsBruh", availableKids)
		return availableKids
	}
	getCompletedList = (kidsArray, currentDate) => {
		//console.log("getSomeKidsBruh KidsArray", kidsArray, "currentDate", currentDate)
		let completedKids = kidsArray.filter(kid => {
			return kid.rides.some(ride => {
				return ride.date === currentDate
			});
		})
		console.log("completedKids from getSomeKidsBruh", completedKids)
		return completedKids
	}

	getInProgressList = () => {

	}
	render() {
		return (
			<>
				<p>Hello this is the Admin Dashboard</p>
				<h5>This where kids who do not have a ride will go.</h5>
				{this.state.availableKids.map(availableKid => (
					<p>{availableKid.nickName}</p>))}
				<h5>This is where current rides will go, with a button to complete them.</h5>
				<h5>This is where a list of kids who have been picked up will go.</h5>
				{this.state.completedKids.map(completedKid => (
					<p>{completedKid.nickName}</p>))}
			</>
		);
	}
}
export default AdminDash;
