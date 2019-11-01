import React, { Component } from 'react';


class AdminDash extends Component {
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

	 getKidList = () => {

	 }
	 getCompletedList = () => {

	 }

	 getInProgressList = () => {

	 }

	render() {
		return (
			<>
            <p>Hello this is the Admin Dashboard</p>
			<p>This where kids who do not have a ride will go.</p>
			<p>This is where current rides will go, with a button to complete them.</p>
			<p>This is where a list of kids who have been picked up will go.</p>
            </>
		);
	}
}

export default AdminDash;
