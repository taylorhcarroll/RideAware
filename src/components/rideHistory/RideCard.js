import React, { Component } from 'react';
import RideManager from '../../modules/RideManager'
import CardHeader from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/Button';

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
                <div class="Ride-Card" main-Form id={`carCardId--${this.props.ride.id}`}>
                    <h4>Date: {this.props.ride.date}</h4>
                    <h5>Time: {this.props.ride.timeStamp}</h5>
                    <h5>Driver: {this.props.ride.user.name}</h5>
                    <h5>Passengers:</h5>
                    <ul class="kid-ride-card">
                        {this.props.ride.kids.map(kid => (
                            <li class="ride-history-kid">{kid.name}</li>
                        ))
                        }
                    </ul>
                </div>
            </>
        )
    }
}

export default RideCard;
