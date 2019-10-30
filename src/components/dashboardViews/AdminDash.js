import React, { Component } from 'react';


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
            <p>Hello this is the Admin Dashboard</p>
			
            </>
		);
	}
}

export default UserDash;
