import React, { Component } from 'react';
import RideManager from '../../modules/RideManager'

class RideCard extends Component {
	state = {
		rides: []
	};

	// componentDidMount() {
    //     this.props.getData()
    //  }


	render() {
		return (
			<>
            <p>Hello this is a RideCard</p>
            <p>Date: {this.props.ride.date}</p>
            <p>Time: {this.props.ride.time}</p>
            <p>Driver: {this.props.ride.user.name}</p>
            {this.state.rides.map(ride => (
            {/* <p>Passengers: {this.props.ride.kid.name}</p> */}
            {/* {this.props.kidGuardian.kid.nickName} */}
            </>
		);
	}
}

export default RideCard;
