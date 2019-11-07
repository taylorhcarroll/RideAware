import React from 'react';
import Button from '@material-ui/core/Button';
import CarManager from '../../modules/CarManager';
import { CardContent } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
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
        expanded: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    toggle = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }))
    }

    updateExistingCar = evt => {
        //evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedCar = {
            id: this.props.carId,
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
                expanded: false
            });
        });
    }

    handleClick = evt => {
        evt.preventDefault();
        this.updateExistingCar();
        // this.onClose();
        this.setState({ loadingStatus: false });
    };

    render() {
        return (
            <div className='addBtnContainer'>
                <Button
                    className='addItemBtn'
                    type='primary'
                    variant="contained" size="small" color="secondary"
                    shape='round'
                    icon='edit'
                    size='small'
                    onClick={this.toggle}
                >
                    {this.state.expanded === false ? "Show" : "Hide"} Edit
				</Button>
                {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
                {this.state.expanded === true ?
                    <CardContent>
                        <form className='login-form'>
                            <div className='formField'>
                            </div>
                            <div className='formField'>
                                <TextField
                                    type='text'
                                    label='Nick Name'
                                    margin="dense"
                                    variant="outlined"
                                    required
                                    onChange={this.handleFieldChange}
                                    id='nickName'
                                    value={this.state.nickName}
                                    prefix={
                                        <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                    }
                                />
                                <TextField
                                    type='text'
                                    label='Make'
                                    margin="dense"
                                    variant="outlined"
                                    type='text'
                                    required
                                    onChange={this.handleFieldChange}
                                    id='make'
                                    value={this.state.make}
                                    prefix={
                                        <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                    }
                                />
                                <TextField
                                    type='text'
                                    label='Model'
                                    margin="dense"
                                    variant="outlined"
                                    type='text'
                                    required
                                    onChange={this.handleFieldChange}
                                    id='model'
                                    value={this.state.model}
                                    prefix={
                                        <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                    }
                                />
                                <TextField
                                    type='text'
                                    label='Year'
                                    margin="dense"
                                    variant="outlined"
                                    type='text'
                                    required
                                    onChange={this.handleFieldChange}
                                    id='year'
                                    value={this.state.year}
                                    prefix={
                                        <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                    }
                                />
                                <TextField
                                    type='text'
                                    label='Color'
                                    margin="dense"
                                    variant="outlined"
                                    type='text'
                                    required
                                    onChange={this.handleFieldChange}
                                    id='color'
                                    value={this.state.color}
                                    prefix={
                                        <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                    }
                                />
                                {/* <TextField
                                    type='text'
                                    label='Nick Name'
                                    margin="dense"
                                    variant="outlined"
                                    type='text'
                                    required
                                    onChange={this.handleFieldChange}
                                    id='picURL'
                                    placeholder='image upload'
                                    value={this.state.picURL}
                                    prefix={
                                        <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                    } */}
                                {/* /> */}
                            </div>

                            <div className='formField'>
                                <Button
                                    className='login-form-button'
                                    variant="contained" size="small" color="primary"
                                    type='primary'
                                    disabled={this.state.loadingStatus}
                                    onClick={this.handleClick}
                                    icon='edit'
                                >
                                    Confirm Changes
							</Button>
                            </div>
                        </form>
                    </CardContent>
                    : ""}
                {/* </Collapse> */}
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
