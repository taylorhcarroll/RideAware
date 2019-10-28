import React, { Component } from 'react';
import CarCard from './CarCard'
import CarManager from '../../modules/CarManager';
import CarAddForm from './CarAddForm';
// import KidEditForm from './EditEventForm';

class CarsList extends Component {
    state = {
        carUsers: []
    };

    //fetch carUser by userId

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        CarManager.getCarsbyUser(this.props.activeUser).then(cars => {
            console.log("getData function called:", cars)
            this.setState({
                carUsers: cars
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
                    <h1>Hello this is a Car List</h1>
                </div>
                <CarAddForm
                        getData={this.getData}
                        addDriver={this.addDriver}
                        {...this.props}/>
                    {this.state.carUsers.map(carUser => (
                        <CarCard
                             key={carUser.id}
                             carUser={carUser}
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
