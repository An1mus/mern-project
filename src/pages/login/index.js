import React from 'react';
import {connect} from "react-redux";
import {userActions} from "../../actions/auth.actions";
import LoginForm from "./loginForm";

class LoginComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showLoginForm: true,
		};

	}

	submitForm = (username, password) => {
		this.props.login(username, password);
	};

	render() {
		return (
			<>
				{
					this.state.showLoginForm && <LoginForm onSubmit={this.submitForm}/>
				}
			</>
		);
	}
}

const mapStateProps = state => {
	const {isLoggedIn, isLoggingIn, user} = state;
	return {isLoggedIn, isLoggingIn, user};
};

const actionCreators = {
	login: userActions.login,
};

const connectedLoginComponent = connect(mapStateProps, actionCreators)(LoginComponent);
export {connectedLoginComponent as Login};

