import React, { Component } from 'react';
import AuthManager from '../../modules/AuthManager';

class Registration extends Component {
	// Set initial state
	state = {
		regUserName: '',
		regPassword: '',
		regName: '',
		regPasswordConfirm: ''
	};

	// Update state whenever an input field is edited
	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	handleRegistration = e => {
		e.preventDefault();
		let userName = this.state.regUserName;
		let password = this.state.regPassword;
		let name = this.state.regName;
		let passwordConfirm = this.state.regPasswordConfirm;
		// starting the if statement
		if (password !== passwordConfirm) {
			// if pass isn't equal to passConfirm
			alert('Please make sure  use the same password');
			// if both password fields are empty
		} else if (password === '' || passwordConfirm === '') {
			alert('Please fill the Password Form');
		} else if (userName === '') {
			alert('Please enter a valid user name');
		} else {
			const newUser = {
				userName: userName,
				password: password,
				name: name
			};
			AuthManager.createUser(newUser).then(response => {
				//response[0].id is the ID of the user you logged in with,
				//in case of "Steve" it would be "1"
				this.props.setUser(response.id);
				this.props.history.push(`/`);
			});
		}
	};

	render() {
		return (
			<>
				<form
					onSubmit={this.handleRegistration}
					id='loginForm'
					className='login-form'
				>
					<div className='formField'>
						<input
							onChange={this.handleFieldChange}
							id='regUserName'
							type='userName'
							placeholder='User Name'
							required=''
							autoFocus=''
						/>
					</div>
					<div className='formField'>
						<input
							onChange={this.handleFieldChange}
							type='name'
							id='regName'
							placeholder='Name'
							required=''
							autoFocus=''
						/>
					</div>
					<div className='formField'>
						<input
							onChange={this.handleFieldChange}
							type='password'
							id='regPassword'
							placeholder='Password'
							required=''
						/>
					</div>
					<div className='formField'>
						<input
							onChange={this.handleFieldChange}
							type='password'
							id='regPasswordConfirm'
							placeholder='Confirm Password'
							required=''
						/>
					</div>
					<div className='formField'>
						{/* <Checkbox>Remember me</Checkbox> */}
						<button type='submit' className='login-form-button'>
							Log in
						</button>
						<p className='regLink' onClick={this.props.hideReg} href=''>
							Go back to Login!
						</p>
					</div>
				</form>
			</>
		);
	}
}

export default Registration;