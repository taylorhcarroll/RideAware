import React, { Component } from 'react';
import CarManager from '../../modules/CarManager'
import KidManager from '../../modules/KidManager'
import RideManager from '../../modules/RideManager'
import DashKidCard from './DashKidCard'
import DashKidCardCompleted from './DashKidCardCompleted'
import moment from 'moment'

class UserDash extends Component {
	state = {
		ride: "",
		arrayCars: [],
		selectedCar: "",
		arrayKids: [],
		passengers: [],
		rideCreated: false,
		added: ""
	};

	toggle = () => {
        this.setState(prevState => ({
            rideCreated: !prevState.rideCreated
        }))
    }

	handleFieldChange = evt => {
		console.log("HandleField change is called", evt.target.id)
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};
	setPassenger = (id) => {
		console.log("setPassenger is Called", id)
		this.state.passengers.push(id)
		//push into the passengers array the kidId
	}
	removePassenger = (id) => {
		console.log("removePassenger is Called", id)
		// this.state.passengers.filter(function (id) {
		//remove passenger in array by kidId
		var index = this.state.passengers.indexOf(id);
		if (index > -1) {
			this.state.passengers.splice(index, 1);
		}
	}
	resetButtons = () => {
		this.setState({
			added: false
		})
	}
	startRide = () => {
		console.log("startRide is Called", moment(new Date()))
		console.log("selectedCar", this.state.selectedCar)
		//create the ride and take the passengers array and forEach over each to create the relationships
		const newRide = {
			userId: parseInt(sessionStorage.getItem('activeUser')),
			date: moment(new Date()).format("MMM Do YY"),
			carId: this.state.selectedCar,
			timeStamp: moment(new Date()).format('LT'),
			//moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'),
			editTimeStamp: "",
			locationId: "1",
			PickedUp: false
		}
		RideManager.createRide(newRide)
			.then((response) =>
				this.setState({
					ride: response,
				}))
				.then(() =>
		this.state.passengers.forEach(passenger => {
			let passengerObj = {
						rideId: this.state.ride.id,
						kidId: passenger
					}
					console.log("passenger Object", passengerObj)
					RideManager.addPassenger(passengerObj)
		// {this.state.passengers.map(passenger =>
		// 	let passengerObj = {
		// 		rideId: this.state.ride.id,
		// 		kidId: passenger
		// 	}
		// 	RideManager.addPassenger(passengerObj))}
	}))
	console.log("new Ride", newRide)
	this.toggle()
}

	cancelRide = () => {
		RideManager.deleteRide(this.state.ride.id).then(() => {
			this.toggle()
		this.getRideData()
	})}

	componentDidMount() {
		const newState = {}
		CarManager.getCarsbyUser(this.props.activeUser).then(cars => {
			newState.arrayCars = cars
		})
			.then(() => KidManager.getKidsbyUser(this.props.activeUser).then(kids => {
				newState.arrayKids = kids
			}))
			.then(() => {
				this.setState(newState)
			})
	}
	getRideData() {
		const newState = {}
		CarManager.getCarsbyUser(this.props.activeUser).then(cars => {
			newState.arrayCars = cars
		})
			.then(() => KidManager.getKidsbyUser(this.props.activeUser).then(kids => {
				newState.arrayKids = kids
			}))
			.then(() => {
				this.setState(newState)
			})
		console.log("newState", newState)
		//console.log("the set state", this.state)
	}

	render() {
		console.log("selected car",this.state.selectedCar)
		return (
			<>
				<p>Hello this is the User Dashboard</p>
				<select id='selectedCar' onChange={this.handleFieldChange}>
					<option value="" disabled selected>Select your Car</option>
					{this.state.arrayCars.map(arrayCar =>
						<option key={arrayCar.car.id} value={arrayCar.car.id}>{arrayCar.car.nickName}</option>
					)}
				</select>
				{
					this.state.arrayKids.map(arrayKid =>
						{return this.state.rideCreated === false ?
						<DashKidCard
							key={arrayKid.kid.id}
							arrayKid={arrayKid}
							{...this.props}
							setPassenger={this.setPassenger}
							removePassenger={this.removePassenger}
							rideCreated={this.state.rideCreated}
						/> :
						<DashKidCardCompleted
							key={arrayKid.kid.id}
							arrayKid={arrayKid}
							{...this.props}
							rideCreated={this.state.rideCreated}
						/>
						})
				}
				{this.state.rideCreated === false ?
				<button
					className='addItemBtn'
					type='primary'
					shape='round'
					icon='delete'
					size='small'
					onClick={() => {this.startRide()}}
				>Start Ride</button>
				:
				<button
					className='addItemBtn'
					type='primary'
					shape='round'
					icon='delete'
					size='small'
					onClick={() => this.cancelRide(this.state.ride)}
				>Cancel Ride</button> }
			</>
		);
	}
}

export default UserDash;
