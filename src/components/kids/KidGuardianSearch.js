import React, { Component } from 'react';
import KidManager from '../../modules/KidManager';
import KidGuardianSearchCard from './KidGuardianSearchCard';
import { TextField } from '@material-ui/core';

class KidGuardianSearch extends Component {
    //define what this component needs to render
    state = {
        searchQuery: '',
        searchResults: []
    };

    handleSearch(searchString) {
        if (searchString.length > 2) {
            KidManager.findGuardian(searchString).then(response => {
                this.setState({ searchResults: response });
            });
        } else {
            this.setState({ searchResults: [] });
        }
    }
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange, () =>
            this.handleSearch(this.state.searchQuery)
        );
    };

    render() {
        console.log("this.state.searchResults", this.state.searchResults)
        return (
            <section className='GuardianSearch'>
                <h5>Find a Guardian:</h5>
                {/* <button
					type='button'
					className='btn'
					onChange={() => {
						this.handleSearch();
					}}
				>
					Search
				</button> */}
                {/* this is the input field */}
                <TextField
                    id='searchQuery'
                    onChange={this.handleFieldChange}
                    label='Search by Name'
                    margin="dense"
                    variant="outlined"
                ></TextField>
                {this.state.searchResults.map(guardian => (
                    <KidGuardianSearchCard
                        addGuardian={this.props.addGuardian}
                        getKidCardData={this.props.getKidCardData}
                        key={guardian.id}
                        guardian={guardian}
                        kidGuardian={this.props.kidGuardian}
                        getData={this.props.getData}
                    />
                ))}
            </section>
        );
    }
}
export default KidGuardianSearch;
