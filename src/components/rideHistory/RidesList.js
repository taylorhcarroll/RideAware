import React, { Component } from 'react';
import RideCard from './RideCard'


class RidesList extends Component {
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
            <p>Hello this is a Ride List</p>
			<RideCard
						// key={article.id}
						// article={article}
						{...this.props}
						// getData={this.getData}
					/>
            </>
		);
	}
}

export default RidesList;
