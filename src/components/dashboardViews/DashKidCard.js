import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';


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
                                <button
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
                        </button> :
                                <button
                                    className='addItemBtn'
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
                    </button>} </> : ""}
                    <p>Name: {this.props.arrayKid.kid.nickName}</p>
                </div>
            </>
        );
    }
}

export default DashKidCard;