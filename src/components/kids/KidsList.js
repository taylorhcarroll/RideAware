import React, { Component } from 'react';
import KidCard from './KidCard'
import KidManager from '../../modules/KidManager';
import KidAddForm from './KidAddForm';
// import KidEditForm from './EditEventForm';

class KidsList extends Component {
    state = {
        kidGuardians: []
    };

    //fetch kidUser by userId

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        KidManager.getKidsbyUser(this.props.activeUser).then(kids => {
            console.log("getData function called:", kids)
            this.setState({
                kidGuardians: kids
            });
        });
    };
    render() {
        return (
            <>
            <div className='mainContainer'>
                <div className='sectionHeader'>
                    <h1>Hello this is a Kid List</h1>
                </div>
                <KidAddForm
                        getData={this.getData}
                        addGuardian={this.addGuardian}
                        {...this.props}/>
                    {this.state.kidGuardians.map(kidGuardian => (
                        <KidCard
                             key={kidGuardian.id}
                             kidGuardian={kidGuardian}
                            {...this.props}
                        addGuardian={this.addGuardian}
                        getData={this.getData}
                        />
                    ))}
                </div>
                </>
                );
            }
        }

export default KidsList;
