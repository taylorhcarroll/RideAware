import React, { Component } from 'react';
import RideCard from './RideCard'
import RideManager from '../../modules/RideManager';

class RidesList extends Component {
	state = {
		rides: []
	};

	// handleDelete = id => {
	// 	EventsManager.delete(id).then(() => {
	// 		this.props.getData();
	// 	});
	// };
	getData = () => {
		RideManager.getRidesWithKids(this.props.activeUser).then(rides => {
			console.log("getData Rides function called:", rides)
			this.setState({
				rides: rides
			});
		});
	}
	componentDidMount() {
		this.getData();
	}

	render() {
		RideManager.getRidesWithKids()
		return (
			<>
				<div className='mainContainer'>
					<div className='sectionHeader'>
						<h1>Past Rides</h1>
					</div>
					{this.state.rides.map(ride => (
						<RideCard
							key={ride.id}
							{...this.props}
							getData={this.getData}
							ride={ride}
						/>
					))}
					</div>
            </>
				);
			}
		}
		export default RidesList;
