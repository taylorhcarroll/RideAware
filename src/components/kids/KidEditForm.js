import React, { Component } from 'react';


class KidEditCard extends Component {
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
            <p>Hello this is a Kid Edit Card</p>
            </>
		);
	}
}

export default KidEditCard;
