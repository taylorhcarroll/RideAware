import React from 'react';
import KidManager from '../../modules/KidManager';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

class KidAddForm extends React.Component {
    state = {
        userId: '',
        nickName: "",
        name: "",
        age: "",
        picURL: "placeHolder.jpeg",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    addNewKid = () => {
        // evt.preventDefault();
        if (
            this.state.nickName === '' ||
            this.state.name === '' ||
            this.state.age === '' ||
            this.state.picUrl === ''
        ) {
            window.alert('Please fill out all the fields');
        } else {
            let userId = parseInt(sessionStorage.getItem('activeUser'));
            const kid = {
                nickName: this.state.nickName,
                name: this.state.name,
                age: this.state.age,
                picURL: "placeHolder.jpeg",
            };
            KidManager.createKid(kid, userId).then(this.props.getData);
        }
    };
    handleClick = evt => {
        evt.preventDefault();
        this.addNewKid();
        // this.onClose();
        document.querySelector('#nickName').value = '';
        document.querySelector('#name').value = '';
        document.querySelector('#age').value = '';
        // document.querySelector('#picURL').value = '';
        this.setState({
            userId: '',
            nickName: "",
            name: "",
            age: "",
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
                        <TextField
                            onChange={this.handleFieldChange}
                            type='nickName'
                            id='nickName'
                            required=''
                            autoFocus=''
                            label='Nick Name'
                            margin="dense"
                            variant="outlined"
                        />
                    </div>

                    <div className='formField'>
                        <TextField
                            onChange={this.handleFieldChange}
                            type='text'
                            id='name'
                            required=''
                            label='Full Name'
                            margin="dense"
                            variant="outlined"
                        />
                    </div>
                    <div className='formField'>
                        <TextField
                            onChange={this.handleFieldChange}
                            type='text'
                            pattern="[0-9]*"
                            id='age'
                            // placeholder='age'
                            required=''
                            label='Age'
                            margin="dense"
                            variant="outlined"
                        />
                    </div>
                    <div className='formField'>
                        <Button
                            className='addKid-form-button'
                            type='primary'
                            disabled={this.state.loadingStatus}
                            onClick={this.handleClick}
                            icon='add'
                            variant="contained" size="small" color="primary"
                        >
                            Submit
							</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default KidAddForm;