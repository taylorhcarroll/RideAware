import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import AuthManager from '../../modules/AuthManager';


class NavBar extends Component {
    state = {
		userName: ''
	};

	handleLogout = () => {
		this.props.clearUser();
		this.props.history.push('/Login');
	};

	componentDidMount() {
		AuthManager.getUserById(this.props.activeUser).then(data => {
			this.setState({
				userName: data.name
			});
		});
	}

    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/friends">Friends</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/messages">Messages</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tasks">Tasks</Link>
                    </li>
                    <li className='nav-item'>
                    <Link className="nav-link" onClick={this.handleLogout}>Logout</Link>
						</li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
