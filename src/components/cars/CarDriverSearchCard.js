// This file is in charge of displaying one friend that is being pulled
//from FriendsSearch. It will also contain an Add button, and their name.
import React, { Component } from 'react';
import CarManager from '../../modules/CarManager'
import Button from '@material-ui/core/Button';

class CarDriverSearchCard extends Component {
    updateDriver() {
        CarManager.addDriver(this.props.driver.id, this.props.cars_user.car.id)
            .then(() => { this.props.getCarCardData() })
    }

    render() {
        return (
            <div className='CarDriverSearchRow'>
                <h5>{this.props.driver.name}</h5>
                <Button
                    variant="contained" size="small" color="primary"
                    type='button'
                    className='btn'
                    onClick={() => this.updateDriver()}
                >
                    Add
				</Button>
            </div>
        );
    }
}

export default CarDriverSearchCard;
