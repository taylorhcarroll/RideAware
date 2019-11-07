import React, { Component } from 'react';
import CarCard from './CarCard'
import CarManager from '../../modules/CarManager';
import CarAddForm from './CarAddForm';
// import KidEditForm from './EditEventForm';

class CarsList extends Component {
    state = {
        cars_users: []
    };

    //fetch cars_users by userId

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        CarManager.getCarsbyUser(this.props.activeUser).then(cars => {
            console.log("getData function called:", cars)
            this.setState({
                cars_users: cars
            });
        });
    };
    // addDriver = () => {
    // 	CarManager.addDriver(userId, parsedResponse.id).then(() => {
    // 		this.getData()
    // 				//call a set state function for all modules
    // 			});
    // };
    render() {
        return (
            <>
                <div className='mainContainer'>
                    <div className='sectionHeader'>
                        {/* <h1>Hello this is a Car List</h1> */}
                        <h3>Add a Car</h3>
                        <CarAddForm
                            getData={this.getData}
                            addDriver={this.addDriver}
                            {...this.props} />
                    </div>
                    {this.state.cars_users.map(cars_user => (
                        <CarCard
                            key={cars_user.id}
                            cars_user={cars_user}
                            {...this.props}
                            addDriver={this.addDriver}
                            getData={this.getData}
                        />
                    ))}
                </div>
            </>
        );
    }
}

export default CarsList;
