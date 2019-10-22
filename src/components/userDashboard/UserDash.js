import React, { Component } from 'react';
import KidManager from '../../modules/EventsManager';
import KidEditForm from './EditEventForm';

class UserDash extends Component {
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
            <p>Hello this is the User Dashboard</p>
            </>
		);
	}
}

export default UserDash;
