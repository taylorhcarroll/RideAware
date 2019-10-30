import React from 'react';
import CarManager from '../../modules/CarManager';

class CarAddForm extends React.Component {
    state = {
        userId: '',
        nickName: "",
        make: "",
        model: "",
        year: "",
        color: "",
        picURL: "placeHolder.jpeg",
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

    addNewCar = () => {
        // evt.preventDefault();
        if (
            this.state.nickName === '' ||
            this.state.make === '' ||
            this.state.model === '' ||
            this.state.year === '' ||
            this.state.color === '' ||
            this.state.picUrl === ''
        ) {
            window.alert('Please fill out all the fields');
        } else {
            let userId = parseInt(sessionStorage.getItem('activeUser'));
            const car = {
                nickName: this.state.nickName,
                make: this.state.make,
                model: this.state.model,
                year: this.state.year,
                color: this.state.color,
                picURL: "placeHolder.jpeg",
            };
            CarManager.createCar(car, userId).then(this.props.getData);
        }
    };
    handleClick = evt => {
        evt.preventDefault();
        this.addNewCar();
        // this.onClose();
        document.querySelector('#nickName').value = '';
        document.querySelector('#make').value = '';
        document.querySelector('#year').value = '';
        document.querySelector('#model').value = '';
        document.querySelector('#color').value = '';
        // document.querySelector('#picURL').value = '';
        this.setState({
            userId: '',
            nickName: "",
            make: "",
            model: "",
            year: "",
            color: "",
            picURL: "placeHolder.jpeg"
        })
    };

    render() {
        return (
            <div className='addBtnContainer'>

                <form
                    onSubmit={this.handleLogin}
                    id='loginForm'
                    className='login-form'
                >
                    <div className='formField'>
                        <input
                            placeholder='Nick Name'
                            onChange={this.handleFieldChange}
                            type='nickName'
                            id='nickName'
                            required=''
                            autoFocus=''
                        />
                    </div>

                    <div className='formField'>
                        <input
                            onChange={this.handleFieldChange}
                            type='make'
                            id='make'
                            placeholder='make of your vehicle'
                            required=''
                        />
                    </div>
                    <div className='formField'>
                        <input
                            onChange={this.handleFieldChange}
                            type='model'
                            id='model'
                            placeholder='model of your vehicle'
                            required=''
                        />
                    </div>
                    <div className='formField'>
                        <input
                            onChange={this.handleFieldChange}
                            type='year'
                            id='year'
                            placeholder='year of your vehicle'
                            required=''
                        />
                    </div>
                    <input
                        onChange={this.handleFieldChange}
                        type='text'
                        id='color'
                        placeholder='color of your vehicle'
                        required=''
                    />
                    <div className='formField'>
							<button
								className='addCar-form-button'
								type='primary'
								disabled={this.state.loadingStatus}
								onClick={this.handleClick}
								icon='add'
							>
								Submit
							</button>
						</div>
                    </form>
            </div>
        );
    }
}

export default CarAddForm;


{/* <Form>
                        <div className='formField'>
                            <Input
                                type='date'
                                required
                                onChange={this.handleFieldChange}
                                id='date'
                                placeholder='Date'
                                prefix={
                                    <Icon type='calendar' style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                            />
                        </div>
                        <div className='formField'>
                            <Input
                                type='text'
                                required
                                onChange={this.handleFieldChange}
                                id='title'
                                placeholder='Title'
                                prefix={
                                    <Icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                            />
                        </div>
                        <div className='formField'>
                            <Input
                                type='text'
                                required
                                onChange={this.handleFieldChange}
                                id='location'
                                placeholder='Location'
                                prefix={
                                    <Icon
                                        type='align-left'
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                            />
                        </div>

                        <div className='formField'>
                            <Button
                                className='login-form-button'
                                type='primary'
                                disabled={this.state.loadingStatus}
                                onClick={this.handleClick}
                                icon='add'
                            >
                                Submit
							</Button>
                        </div>
                    </Form>
                    <img
                        src='/images/chase.gif'
                        alt='Smiley face'
                        height='auto'
                        width='350px'
                        z-index='-2'
                    />
            </div> */}