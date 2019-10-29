import React from 'react';

import CarManager from '../../modules/CarManager';
class CarEditForm extends React.Component {
    state = {
        visible: false,
        userId: '',
        nickName: "",
        make: "",
        model: "",
        year: "",
        color: "",
        picURL: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    // showDrawer = () => {
    // 	this.setState({
    // 		visible: true
    // 	});
    // };

    // onClose = () => {
    // 	this.setState({
    // 		visible: false
    // 	});
    // };

    updateExistingMessage = evt => {
        //evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedCar = {
            id: this.props.id,
            nickName: this.state.nickName,
            make: this.state.make,
            model: this.state.model,
            year: this.state.year,
            color: this.state.color,
            picURL: this.state.picURL,
        };

        CarManager.updateCar(editedCar).then(this.props.getData);
    };

    componentDidMount() {
        CarManager.getCar(this.props.car.id).then(car => {
            console.log("car", car)
            this.setState({

                id: car.userId,
                loadingStatus: false,
                nickName: car.nickName,
                make: car.make,
                model: car.model,
                year: car.year,
                color: car.color,
                picURL: car.picURL,
            });
        });
    }

    handleClick = evt => {
        evt.preventDefault();
        this.updateExistingMessage();
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
                    Show Edit Car
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
                                id='make'
                                placeholder='make'
                                value={this.state.make}
                                prefix={
                                    <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                            />
                            <input
                                type='text'
                                required
                                onChange={this.handleFieldChange}
                                id='model'
                                placeholder='model'
                                value={this.state.model}
                                prefix={
                                    <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                            />
                            <input
                                type='text'
                                required
                                onChange={this.handleFieldChange}
                                id='year'
                                placeholder='year'
                                value={this.state.year}
                                prefix={
                                    <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                            />
                            <input
                                type='text'
                                required
                                onChange={this.handleFieldChange}
                                id='color'
                                placeholder='color'
                                value={this.state.color}
                                prefix={
                                    <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                            />
                             <input
                                type='text'
                                required
                                onChange={this.handleFieldChange}
                                id='picURL'
                                placeholder='image upload'
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
                    {/* <img
                        src='/images/chase.gif'
                        alt='Smiley face'
                        height='auto'
                        width='350px'
                        z-index='-2'
                    /> */}
                {/* </Drawer> */}
            </div>
        );
    }
}

export default CarEditForm;
