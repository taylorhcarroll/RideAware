import React, { Component } from 'react'
import CarManager from '../../modules/CarManager'
import CarDriverSearch from './CarDriverSearch'
import CarEditForm from './CarEditForm'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';


class CarCard extends Component {
    state = {
        cars_users: [],
        uniqueUsers: []
    };

    //fetch cars_user by carId

    handleDelete = id => {
        CarManager.deleteCar(id).then(() => {
            this.props.getData();
        });
    };
    handleDeleteDriver = id => {
        CarManager.deleteDriver(id).then(() => {
            this.getCarCardData();
        });
    };
    // removeDups = (array) => {
    //     let unique = {}
    //     let nameArray = []
    //     array.forEach(obj => {
    //         if (!unique[obj.userId]) { unique[obj.userId] = obj }
    //     });
    //     for (const key in unique) {
    //         let obj = {
    //             name: unique[key].user.name,
    //             userId: unique[key].user.id,
    //             carId: unique[key].carId
    //         }
    //         //can I push these as an object? I want the user Id and the name//
    //         //nameArray.push(unique[key].user.name)
    //         nameArray.push(obj)
    //     }
    //     this.setState({ uniqueUsers: nameArray }, () => {
    //         console.log("unique", this.state.uniqueUsers)
    //         console.log("cars_users", this.state.cars_users)
    //     })

    // }

    getCarCardData = () => {
        CarManager.getUserbyCarId(this.props.activeUser).then(data => {
            console.log("here are your CarCard results", data)
            this.setState({
                cars_users: data
            });
            // console.log("This is your Car Users by Cars you own", data)
            // console.log("this is the name", data[0].user.name)
        })
        // .then(() => this.removeDups(this.state.cars_users))
    };

    componentDidMount() {
        this.getCarCardData()
    }

    render() {
        // console.log("users here", this.state.uniqueUsers)
        console.log("Drivers here", this.props.cars_user)
        return (
            <>
                <div class="Car-Card" main-Form id={`carCardId--${this.props.cars_user.car.id}`}>
                    {/* <p>CarCard</p> */}
                    <h3 class="car-Header">{this.props.cars_user.car.nickName}</h3>

                        {this.props.cars_user.car.picURL === '' ? null :
                            <CardMedia image={this.props.cars_user.car.picURL}/>
                            }
                    <p>Make: {this.props.cars_user.car.make} Model: {this.props.cars_user.car.model} </p>
                    <p>Year: {this.props.cars_user.car.year} Color: {this.props.cars_user.car.color}</p>
                    <p>Guardians:</p>
                    <CarDriverSearch
                        {...this.props}
                        // key={this.cars_user.id}
                        cars_user={this.props.cars_user}
                        getData={this.props.getData}
                        getCarCardData={this.getCarCardData}
                        addDriver={this.props.addDriver} />
                    {this.state.cars_users.map(singleCarUser => {
                        return singleCarUser.carId === this.props.cars_user.car.id ?
                            <div class="driver-card" key={singleCarUser.id}>
                                <h6>{singleCarUser.user.name}  </h6>
                                <Button
                                    variant="contained" size="small" color="error"
                                    className='addItemBtn'
                                    type='delete'
                                    shape='round'
                                    icon='delete'
                                    size='small'
                                    onClick={() => this.handleDeleteDriver(singleCarUser.id)}
                                >
                                    Remove Driver
                        </Button> </div>
                            : ""
                    })
                    }
                    <CarEditForm
                        {...this.props.cars_user}
                        getData={this.props.getData}
                    />
                    <Button
                        variant="contained" size="small" color="error"
                        className='addItemBtn'
                        type='primary'
                        shape='round'
                        icon='delete'
                        size='small'
                        onClick={() => this.handleDelete(this.props.cars_user.car.id)}
                    >
                        Delete Car
							</Button>

                </div>
            </>
        );
    }
}

export default CarCard;
