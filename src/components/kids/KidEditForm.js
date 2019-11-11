import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import KidManager from '../../modules/KidManager';
import { TextField, CardContent } from '@material-ui/core';
class KidEditForm extends React.Component {
    state = {
        visible: false,
        userId: '',
        nickName: "",
        name: "",
        age: "",
        picURL: "",
        loadingStatus: false,
        expanded: false
    };
    toggle = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }))
    }
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    updateExistingKid = evt => {
        //evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedKid = {
            id: this.props.kidId,
            nickName: this.state.nickName,
            name: this.state.name,
            age: this.state.model,
            picURL: this.state.picURL
        };

        KidManager.updateKid(editedKid).then(this.props.getData);
    };

    componentDidMount() {
        KidManager.getKid(this.props.kid.id).then(kid => {
            console.log("kid", kid)
            this.setState({

                id: kid.userId,
                loadingStatus: false,
                nickName: kid.nickName,
                name: kid.name,
                age: kid.age,
                picURL: kid.picURL,
                expanded: false
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
                {this.state.expanded === true ?
                <CardContent>
                < form className='login-form'>
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
                        <TextField
                            type='text'
                            required
                            label='Nick Name'
                            margin="dense"
                            variant="outlined"
                            onChange={this.handleFieldChange}
                            id='nickName'
                            placeholder='Nick name'
                            value={this.state.nickName}
                            prefix={
                                <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                            }
                        />
                        <TextField
                            type='text'
                            required
                            label='Name'
                            margin="dense"
                            variant="outlined"
                            onChange={this.handleFieldChange}
                            id='name'
                            placeholder='name'
                            value={this.state.name}
                            prefix={
                                <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                            }
                        />
                        <TextField
                            type='text'
                            pattern="[0-9]{3}"
                            required
                            label='Age'
                            margin="dense"
                            variant="outlined"
                            onChange={this.handleFieldChange}
                            id='age'
                            placeholder='age'
                            value={this.state.age}
                            prefix={
                                <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                            }
                        />
                        {/* <TextField
                            type='text'
                            required
                            margin="dense"
                            variant="outlined"
                            onChange={this.handleFieldChange}
                            id='picURL'
                            placeholder='replace image'
                            value={this.state.picURL}
                            prefix={
                                <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                            } */}
                    </div>

                    <div className='formField'>
                        <Button
                            className='login-form-button'
                            type='primary'
                            startIcon={<SaveIcon />}
                            variant="contained" size="small" color="primary"
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
            </div>
        );
    }
}

export default KidEditForm;
