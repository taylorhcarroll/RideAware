import React, { Component } from 'react';


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
                <div id="`DashKidCardId--{this.props.arrayKid.kid.id}`">
                    <p>Name: {this.props.arrayKid.kid.nickName}</p>
                </div>
            </>
        );
    }
}

export default DashKidCardCompleted;