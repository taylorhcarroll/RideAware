import React, { Component } from "react";
import NavBar from "./components/nav/NavBar";
import ApplicationViews from "./components/ApplicationViews";
import Login from './components/auth/Login'
import './components/App.css';


class App extends Component {
	state = {
		user: sessionStorage.getItem('activeUser') !== null,
		activeUser: '',
		admin: ''
	};

	isAuthenticated = () => sessionStorage.getItem('activeUser') !== null;

	setUser = id => {
		sessionStorage.setItem('activeUser', id);
		this.setState({ activeUser: this.getUser(), user: true });
	};

	getUser() {
		if (sessionStorage.getItem('activeUser')) {
			return parseInt(sessionStorage.getItem('activeUser'));
		} else {
			return '';
		}
	}

	adminCheck = (check) => {
		this.setState({
			admin: check
		})
	}
	clearUser = () => {
		sessionStorage.removeItem('activeUser');
		this.setState({
			user: this.isAuthenticated()
		});
	};

	render() {
		return (
			<div className='App'>
				{this.state.user ? (
					<>
						<ApplicationViews
							user={this.state.user}
							admin={this.state.admin}
							{...this.props}
							activeUser={this.state.activeUser}
						/>
						<NavBar
							clearUser={this.clearUser}
							user={this.state.user}
							{...this.props}
							activeUser={this.state.activeUser}
							admin={this.state.admin}
							// currentUserId={this.props.activeUser}
						/>
					</>
				) : (
					<Login
						getUser={this.getUser}
						setUser={this.setUser}
						user={this.state.user}
						{...this.props}
						adminCheck={this.adminCheck}
						admin={this.state.admin}
						activeUser={this.state.activeUser}
					/>
				)}
			</div>
		);
	}
}

export default App;
