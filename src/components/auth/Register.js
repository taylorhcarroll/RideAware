import React, { Component } from 'react';
import AuthManager from '../../modules/AuthManager';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Dropzone from 'react-dropzone';
import request from 'superagent';

const uploadPreset = 'rideAware';
const uploadURL = ' https://api.cloudinary.com/v1_1/nss-35/image/upload';
class Registration extends Component {
	// Set initial state
	state = {
		regUserName: '',
		regPassword: '',
		regName: '',
		regPasswordConfirm: '',
		uploadURL: null,
        file: null,
        picURL: "",
	};

	// Update state whenever an input field is edited
	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	// this is the functionality for react-dropzone to upload images
    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });
        this.handleImageUpload(files[0]);
    }
     // this uploads the image to cloudinary, and sends a URL to the image back in its place
     handleImageUpload(file) {
        let upload = request.post(uploadURL)
            .field('upload_preset', uploadPreset)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    picURL: response.body.secure_url
                });
            }
        });
    }

	handleRegistration = e => {
		e.preventDefault();
		let userName = this.state.regUserName;
		let password = this.state.regPassword;
		let name = this.state.regName;
		let passwordConfirm = this.state.regPasswordConfirm;
		let picURL = this.state.picURL
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
				name: name,
				admin: "false",
				picURL: picURL

			};
			AuthManager.createUser(newUser).then(response => {
				//response[0].id is the ID of the user you logged in with,
				//in case of "Steve" it would be "1"
				this.props.setUser(response.id);
				this.props.history.push(`/Children`);
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
						<TextField
							onChange={this.handleFieldChange}
							id='regUserName'
							type='userName'
							placeholder='User Name'
							required=''
							autoFocus=''
							label='Username'
							margin="dense"
							variant="outlined"
						/>
					</div>
					<div className='formField'>
						<TextField
							onChange={this.handleFieldChange}
							type='name'
							id='regName'
							//placeholder='Name'
							required=''
							autoFocus=''
							label='Name'
							margin="dense"
							variant="outlined"
						/>
					</div>
					<div className='formField'>
						<TextField
							onChange={this.handleFieldChange}
							type='password'
							id='regPassword'
							//placeholder='Password'
							required=''
							label='Password'
							margin="dense"
							variant="outlined"
						/>
					</div>
					<div className='formField'>
						<TextField
							onChange={this.handleFieldChange}
							type='password'
							id='regPasswordConfirm'
							//placeholder='Confirm Password'
							required=''
							label='Confirm Password'
							margin="dense"
							variant="outlined"
						/>
					</div>
					<div class="imageUpload-wrapper">
                                            <div className="FileUpload">
                                                <Dropzone
                                                    onDrop={this.onImageDrop.bind(this)}
                                                    accept="image/*"
                                                    multiple={false}>
                                                    {({ getRootProps, getInputProps }) => {
                                                        return (
                                                            <div
                                                                {...getRootProps()}
                                                            >
                                                                <input {...getInputProps()} /> ADD PICTURE:
                                                    {
                                                                    <p>Drag a picture here, or click to select a file to upload.</p>
                                                                }
                                                            </div>
                                                        )
                                                    }}
                                                </Dropzone>
                                            </div>

                                            <div>
                                                {this.state.picURL === '' ? null :
                                                    <div>
                                                        <p>{this.state.name}</p>
                                                        <img class = "uploaded-PIC" src={this.state.picURL} />
                                                    </div>}
                                            </div>
                                        </div>
					<div className='formField'>
						<div class="login-button-container">
							{/* <Checkbox>Remember me</Checkbox> */}
							<Button type='submit' variant="contained" size="small" color="primary" className='login-form-button'>
								Sign Up
						</Button>
							<Button size="small" variant="contained" color="secondary" className='regLink' onClick={this.props.hideReg} href=''>
								Go to Login!
							</Button>
						</div>
					</div>
				</form>
			</>
		);
	}
}

export default Registration;