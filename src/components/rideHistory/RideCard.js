import React, { Component } from 'react';
import RideManager from '../../modules/RideManager'

class RideCard extends Component {
    // state = {
    //     rides: []
    // };

    // componentDidMount() {
    //     this.props.getData()
    //  }


    render() {
        return (
            <>
                <h5>Date: {this.props.ride.date}</h5>
                <p>Time: {this.props.ride.timeStamp}</p>
                <p>Driver: {this.props.ride.user.name}</p>
                <p>Passengers:</p>
                {this.props.ride.kids.map(kid => (
                    <p>{kid.name}</p>
                )
                )
                }
            </>
        )
    }
}

export default RideCard;
