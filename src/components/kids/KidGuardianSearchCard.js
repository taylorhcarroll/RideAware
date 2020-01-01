// This file is in charge of displaying one friend that is being pulled
//from FriendsSearch. It will also contain an Add button, and their name.
import React, { Component } from 'react';
import KidManager from '../../modules/KidManager'
import Button from '@material-ui/core/Button';


class KidGuardianSearchCard extends Component {
    updateGuardian() {
        KidManager.addGuardian(this.props.guardian.id, this.props.kidGuardian.kid.id)
            .then(() => { this.props.getKidCardData() })
    }

    render() {
        return (
            <div className='KidGuardianSearchRow'>
                <h5>{this.props.guardian.name}</h5>
                <Button
                    variant="contained" size="small" color="primary"
                    type='button'
                    className='btn'
                    onClick={() => this.updateGuardian()}
                >
                    Add
				</Button>
            </div>
        );
    }
}

export default KidGuardianSearchCard;
