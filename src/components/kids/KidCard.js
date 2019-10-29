import React, { Component } from 'react'
import KidManager from '../../modules/KidManager'
import KidGuardianSearch from './KidGuardianSearch'
import KidEditForm from './KidEditForm'

class KidCard extends Component {
    state = {
        kidGuardians: [],
        // uniqueUsers: []
    };

    //fetch carUser by carId

    handleDelete = id => {
        KidManager.deleteKid(id).then(() => {
            this.props.getData();
        });
    };
    handleDeleteDriver = id => {
        KidManager.deleteGuardian(id).then(() => {
            this.getKidCardData();
        });
    };

    getKidCardData = () => {
        KidManager.getUserbyKidId(this.props.activeUser).then(data => {
            console.log("here are your KidCard results", data)
            this.setState({
                kidGuardians: data
            });
            // console.log("This is your Car Users by Cars you own", data)
            // console.log("this is the name", data[0].user.name)
        })
    };

    componentDidMount() {
        this.getKidCardData()
    }

    render() {
        console.log("Guardians here", this.props.kidGuardian)
        return (
            <>
                <div id={`kidCardId--${this.props.kidGuardian.kid.id}`}>
                    {/* <p>CarCard</p> */}
                    <h2>{this.props.kidGuardian.car.nickName}</h2>
                    <p>Make: {this.props.carUser.car.make} Model: {this.props.carUser.car.model} </p>
                    <p>Year: {this.props.carUser.car.year} Color: {this.props.carUser.car.color}</p>
                    <p>Guardians:</p>
                    <CarDriverSearch
                        {...this.props}
                        // key={this.carUser.id}
                        carUser={this.props.carUser}
                        getData={this.props.getData}
                        getCarCardData={this.getCarCardData}
                        addDriver={this.props.addDriver} />
                    {this.state.carUsers.map(singleCarUser => {
                        return singleCarUser.carId === this.props.carUser.car.id ?
                                <div key={singleCarUser.id}>
                                    <p>{singleCarUser.user.name}  </p>
                                    <button
                                        className='addItemBtn'
                                        type='primary'
                                        shape='round'
                                        icon='delete'
                                        size='small'
                                        onClick={() => this.handleDeleteDriver(singleCarUser.id)}
                                    >
                                        Remove Driver
                        </button> </div>
                            : ""
                    })
                    }
                    <CarEditForm
                        {...this.props.carUser}
                        getData={this.props.getData}
                    />
                    <button
                        className='addItemBtn'
                        type='primary'
                        shape='round'
                        icon='delete'
                        size='small'
                        onClick={() => this.handleDelete(this.props.carUser.car.id)}
                    >
                        Delete Car
							</button>

                </div>
            </>
        );
    }
}

export default KidCard;
