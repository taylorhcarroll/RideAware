// This file is in charge of displaying one friend that is being pulled
//from FriendsSearch. It will also contain an Add button, and their name.
import React, { Component } from 'react';

class CarDriverSearchCard extends Component {
	render() {
		return (
			<div className='CarDriverSearchRow'>
				<h5>{this.props.driver.name}</h5>
				{/* <button
					type='button'
					className='btn'
					onClick={() => this.props.addDriver(this.props.driver.id)}
				>
					Haunt
				</button> */}
			</div>
		);
	}
}

export default CarDriverSearchCard;
