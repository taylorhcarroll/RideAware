import React, { Component } from 'react';


class DashKidCard extends Component {
    state = {
        added: false
    };

    componentDidMount() {
    }

    render() {
        return (
            <>
                <div id="`DashKidCardId--{this.props.arrayKid.kid.id}`">
                    <p>Name: {this.props.arrayKid.kid.nickName}</p>
                    {this.state.added === true ?
                        <button
                            className='addItemBtn'
                            type='primary'
                            shape='round'
                            icon='delete'
                            size='small'
                            onClick={() => {
                                this.props.setPassenger(this.props.arrayKid.kidId)
                                this.setState({
                                    added: true
                                })
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
                                this.setState({
                                    added: false
                                })
                            }}

                        >
                            Remove
                    </button>}
                </div>
            </>
        );
    }
}

export default DashKidCard;