import React, { Component } from 'react';
import CarManager from '../../modules/CarManager';
import CarDriverSearchCard from './CarDriverSearchCard';

class CarDriverSearch extends Component {
	//define what this component needs to render
	state = {
		searchQuery: '',
		searchResults: []
	};

	handleSearch(searchString) {
		if (searchString.length > 2) {
			CarManager.findDriver(searchString).then(response => {
				this.setState({ searchResults: response });
			});
		} else {
			this.setState({ searchResults: [] });
		}
	}
	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange, () =>
			this.handleSearch(this.state.searchQuery)
		);
	};

	render() {
        console.log("this.state.searchResults", this.state.searchResults)
		return (
			<section className='driverSearch'>
				<h5>Find a Driver:</h5>
				{/* <button
					type='button'
					className='btn'
					onChange={() => {
						this.handleSearch();
					}}
				>
					Search
				</button> */}
				{/* this is the input field */}
				<input
					id='searchQuery'
					onChange={this.handleFieldChange}
					placeholder='Search by Name'
				></input>
				{this.state.searchResults.map(driver => (
					<CarDriverSearchCard
						addDriver={this.props.addDriver}
                        key={driver.id}
                        driver={driver}
                        carUser={this.props.carUser}
                        getData={this.props.getData}
					/>
				))}
			</section>
		);
	}
}
export default CarDriverSearch;
