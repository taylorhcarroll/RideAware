import React, { Component } from 'react';
import CarCard from './CarCard'
// import KidManager from '../../modules/EventsManager';
// import KidEditForm from './EditEventForm';

class CarsList extends Component {
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
            <p>Hello this is a Car List</p>
            <CarCard
						// key={article.id}
						// article={article}
						{...this.props}
						// getData={this.getData}
					/>
            </>
		);
	}
}

export default CarsList;
