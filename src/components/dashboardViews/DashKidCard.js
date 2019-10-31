import React, { Component } from 'react';


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
                <div id="`DashKidCardId--{this.props.arrayKid.kid.id}`">
                    <p>Name: {this.props.arrayKid.kid.nickName}</p>
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
                </div>
            </>
        );
    }
}

export default DashKidCard;