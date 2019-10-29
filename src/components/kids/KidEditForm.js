import React from 'react';

import KidManager from '../../modules/KidManager';
class KidEditForm extends React.Component {
    state = {
        visible: false,
        userId: '',
        nickName: "",
        name: "",
        age: "",
        picURL: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    updateExistingKid = evt => {
        //evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedCar = {
            id: this.props.id,
            nickName: this.state.nickName,
            name: this.state.name,
            age: this.state.model,
            picURL: this.state.picURL
        };

        KidManager.updateKid(editedKid).then(this.props.getData);
    };

    componentDidMount() {
        Manager.getKid(this.props.kid.id).then(kid => {
            console.log("kid", kid)
            this.setState({

                id: kid.userId,
                loadingStatus: false,
                nickName: kid.nickName,
                name: kid.name,
                age: kid.age,
                picURL: car.picURL
            });
        });
    }

    handleClick = evt => {
        evt.preventDefault();
        this.updateExistingKid();
        // this.onClose();
        this.setState({ loadingStatus: false });
    };

    render() {
        return (
            <div className='addBtnContainer'>
                <button
                    className='addItemBtn'
                    type='primary'
                    shape='round'
                    icon='edit'
                    size='small'
                    // onClick={this.showDrawer}
                >
                    Show Edit Kid
				</button>

                {/* <Drawer
                    width='350'
                    title='Edit News'
                    placement='right'
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                > */}
                    <form className='login-form'>
                        <div className='formField'>
                            {/* <Input type="date"
                        required onChange={this.handleFieldChange}
                        id="date" placeholder="Date"
                        value={this.state.date}
                        prefix={
                            <Icon type='calendar' style={{ color: 'rgba(0,0,0,.25)' }} />
                    }/> */}
                        </div>
                        <div className='formField'>
                            <input
                                type='text'
                                required
                                onChange={this.handleFieldChange}
                                id='nickName'
                                placeholder='Nick name'
                                value={this.state.nickName}
                                prefix={
                                    <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                            />
                            <input
                                type='text'
                                required
                                onChange={this.handleFieldChange}
                                id='name'
                                placeholder='name'
                                value={this.state.name}
                                prefix={
                                    <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                            />
                            <input
                                type='text'
                                pattern="[0-9]{3}"
                                required
                                onChange={this.handleFieldChange}
                                id='age'
                                placeholder='age'
                                value={this.state.age}
                                prefix={
                                    <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                            />
                             <input
                                type='text'
                                required
                                onChange={this.handleFieldChange}
                                id='picURL'
                                placeholder='replace image'
                                value={this.state.picURL}
                                prefix={
                                    <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                            />
                        </div>

                        <div className='formField'>
                            <button
                                className='login-form-button'
                                type='primary'
                                disabled={this.state.loadingStatus}
                                onClick={this.handleClick}
                                icon='edit'
                            >
                                Confirm Changes
							</button>
                        </div>
                    </form>
            </div>
        );
    }
}

export default KidEditForm;
