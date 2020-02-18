import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';


class DashKidCard extends Component {
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
                    {!this.props.rideCreated ?
                        <>
                            {this.state.added === true ?
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className='addItemBtn'
                                    type='primary'
                                    shape='round'
                                    icon='delete'
                                    size='small'
                                    onClick={() => {
                                        this.props.setPassenger(this.props.arrayKid.kidId)
                                        this.toggle()
                                    }}

                                >
                                    Add
                        </Button> :
                                <Button
                                    variant="contained"
                                    className='delete-Button'
                                    type='primary'
                                    shape='round'
                                    icon='delete'
                                    size='small'
                                    onClick={() => {
                                        this.props.removePassenger(this.props.arrayKid.kidId)
                                        this.toggle()
                                    }}

                                >
                                    Remove
                    </Button>} </> : ""}
                    <p class="dash-kid-name"> {this.props.arrayKid.kid.nickName}</p>
                </div>
            </>
        );
    }
}

export default DashKidCard;