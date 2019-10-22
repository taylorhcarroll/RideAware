import React, { Component } from 'react';


class KidAddForm extends Component {
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
            <p>Hello this is a Kid Add Form Card</p>
            </>
		);
	}
}

export default KidAddForm;
