import React, { Component } from 'react';
import KidManager from '../../modules/EventsManager';
import KidEditForm from './EditEventForm';

class KidsList extends Component {
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
            <p>Hello this is a Kid List</p>
            </>
		);
	}
}

export default KidsList;
