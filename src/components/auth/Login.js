import React, { Component } from 'react';
import AuthManager from '../../modules/AuthManager';
import Register from '../auth/Register';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
// import { Spring } from 'react-spring/renderprops';

class Login extends Component {
	// Set initial state
	state = {
		userName: '',
		password: '',
		hideReg: true
	};

	showLogin = () => {
		this.setState({ hideReg: false });
	};

	hideReg = () => {
		this.setState({ hideReg: true });
	};

	// Update state whenever an input field is edited
	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	handleLogin = e => {
		e.preventDefault();
		let userName = this.state.userName;
		let password = this.state.password;
		AuthManager.getUser(userName).then(response => {
			if (response.length === 0) {
				alert('Please enter a valid User Name.');
			} else if (response.length === 1 && response[0].password !== password) {
				alert('Password is incorrect, please try again.');
				// starting the if statement to check for empty fields//
			} else if (password === '') {
				alert('Please fill the Password Form');
			} else if (userName === '') {
				alert('Please enter a valid email address');
			} else if (response[0].password === password) {
				//response[0].id is the ID of the user you logged in with,
				//in case of "Steve" it would be "1"
				console.log("logged in user", response[0].admin)
				this.props.setUser(response[0].id);
				this.props.adminCheck(response[0].admin)
				this.props.history.push(`/`);
			}
		});
	};

	render() {
		return (
			<>
				<div class="login-Wrapper">
					<div class="landing-Container">
						<h1>Ride Aware</h1>
						<h6>The safest way to pick your child up from school.</h6>
						<img
							src='/images/login_splash.png'
							alt='parent seeing kid off to school'
							height='auto'
							width='350px'
						// z-index= '-2'
						/>
						{this.state.hideReg && (
							<>
								{/* <Spring
							from={{ opacity: 0 }}
							to={{ opacity: 1 }}
							//config={{ duration: 500 }}
						>
							{props => (
								<div style={props}> */}

								<form
									onSubmit={this.handleLogin}
									id='loginForm'
									className='login-form'
								>
									<div className='formField'>
										<TextField
											//placeholder='Username'
											onChange={this.handleFieldChange}
											type='userName'
											id='userName'
											required=''
											autoFocus=''
											margin="small"
											label='Username'
          									variant="outlined"
										/>
									</div>
									<div className='formField'>
										<TextField
											prefix={
												<icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
											}
											type='password'
											label='Password'
											//placeholder='Password'
											onChange={this.handleFieldChange}
											id='password'
											required=''
											margin="normal"
          									variant="outlined"
										/>
									</div>
									<div className='formField'>
										{/* <Checkbox>Remember me</Checkbox> */}
										<Button variant="contained" size="small" color="primary" type='submit' className='login-form-button'>
											Log in
								</Button>
										<Button size="small" variant="contained" color="secondary" className='regLink' onClick={this.showLogin} href=''>
											Register</Button>
									</div>
								</form>
								{/* </div>
							)}
						</Spring> */}
							</>
						)}

						{!this.state.hideReg && (
							// <Spring
							// 	from={{ opacity: 0 }}
							// 	to={{ opacity: 1 }}
							// 	//config={{ duration: 500 }}
							// >
							// 	{props => (
							// 		<div style={props}>
							<Register {...this.props} hideReg={this.hideReg} />
							// 		</div>
							// 	)}
							// </Spring>
						)}
					</div>
				</div>
			</>
		);
	}
}

export default withRouter(Login);