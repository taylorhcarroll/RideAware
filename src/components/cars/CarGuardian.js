import React, { Component } from 'react';

class CarGuardian extends Component {
	state = {
		myCard: ''
	};

	// handleDelete = id => {
	// 	EventsManager.delete(id).then(() => {
	// 		this.props.getData();
	// 	});
	// };

	componentDidMount() {
	 }

	render() {
		return (
			<>
            <p>Hello this is a Car Edit Card</p>
            </>
		);
	}
}

export default CarGuardian;