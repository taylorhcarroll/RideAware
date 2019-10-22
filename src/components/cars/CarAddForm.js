import React, { Component } from 'react';
import KidManager from '../../modules/EventsManager';
import KidEditForm from './EditEventForm';

class CarAddForm extends Component {
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
            <p>Hello this is a Car Add Form Card</p>
            </>
		);
	}
}

export default CarAddForm;
