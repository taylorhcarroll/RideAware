import React, { Component } from 'react';

class CarCard extends Component {
	state = {
		// car: ''
    };
    
    //fetch carUser by carId

	// handleDelete = id => {
	// 	EventsManager.delete(id).then(() => {
	// 		this.props.getData();
	// 	});
	// };

	componentDidMount() {
	 }

	render() {
        console.log("Car Card Render")
		return (
			<>
            <p>CarCard</p>
            <h2>{this.props.carUser.car.nickName}</h2>
            <p>{this.props.carUser.car.make} {this.props.carUser.car.model} </p>
            <p>Year: {this.props.carUser.car.year}</p>
      {/* <button type="button" onClick={this.handleClick}>Order ME</button> */}
            </>
		);
	}
}

export default CarCard;
