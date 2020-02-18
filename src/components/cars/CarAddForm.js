import React from 'react';
import CarManager from '../../modules/CarManager';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const uploadPreset = 'rideAware';
const uploadURL = ' https://api.cloudinary.com/v1_1/nss-35/image/upload';
class CarAddForm extends React.Component {
    state = {
        userId: '',
        nickName: "",
        make: "",
        model: "",
        year: "",
        color: "",
        uploadURL: null,
        file: null,
        picURL: "",
        loadingStatus: false,
        expand: false

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
                picURL: this.state.picURL,
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
                <div class="add-Button">
                    <Fab color="primary" aria-label="add" onClick={this.toggle}>
                        <AddIcon />
                    </Fab>
                </div>
                {this.state.expanded === true ?
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
                            type='make'
                            id='make'
                            required=''
                            label='Make of Vehicle'
                            margin="dense"
                            variant="outlined"
                        />
                    </div>
                    <div className='formField'>
                        <TextField
                            onChange={this.handleFieldChange}
                            type='model'
                            id='model'
                            placeholder='model of your vehicle'
                            required=''
                            label='Model of Vehicle'
                            margin="dense"
                            variant="outlined"
                        />
                    </div>
                    <div className='formField'>
                        <TextField
                            onChange={this.handleFieldChange}
                            type='year'
                            id='year'
                            required=''
                            label='Year of Vehicle'
                            margin="dense"
                            variant="outlined"
                        />
                    </div>
                    <TextField
                        onChange={this.handleFieldChange}
                        type='text'
                        id='color'
                        required=''
                        label='Color of Vehicle'
                        margin="dense"
                        variant="outlined"
                    />
                    <div>
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
                                                <p>Try dragging a picture here, or click to select a file to upload.</p>
                                            }
                                        </div>
                                    )
                                }}
                            </Dropzone>
                        </div>

                        <div>
                            {this.state.picURL === '' ? <img id="user-Dash" class="uploaded-PIC" src='/images/no-car-uploaded.png' /> :
                                <div>
                                    <p>{this.state.name}</p>
                                    <img src={this.state.picURL} />
                                </div>}
                        </div>
                    </div>
                    <div className='formField'>
                        <Button
                            className='addCar-form-button'
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
                : "" }
            </div>
        );
    }
}

export default CarAddForm;


