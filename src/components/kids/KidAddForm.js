import React from 'react';
import KidManager from '../../modules/KidManager';

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
                            type='text'
                            id='name'
                            placeholder='Name as listed in directory'
                            required=''
                        />
                    </div>
                    <div className='formField'>
                        <input
                            onChange={this.handleFieldChange}
                            type='text'
                            pattern="[0-9]{3}"
                            id='age'
                            placeholder='age'
                            required=''
                        />
                    </div>
                    <div className='formField'>
							<button
								className='addKid-form-button'
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

export default KidAddForm;