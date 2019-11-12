import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class DashKidCardCompleted extends Component {
    state = {
        added: true
    };

    componentDidMount() {
    }
    toggle = () => {
        this.setState(prevState => ({
            added: !prevState.added
        }))
    }
    render() {
        console.log(this.props.rideCreated, "rideCreated props")
        return (
            <>
                <div class="Dash-Kid-Button" id="`DashKidCardId--{this.props.arrayKid.kid.id}`">
                    <Button variant="contained" color="secondary" disabled>
                        Disabled
                    </Button>
                    <p>Name: {this.props.arrayKid.kid.nickName}</p>
                </div>
            </>
        );
    }
}

export default DashKidCardCompleted;