import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {logoutUser} from "../../actions/authActions";
import {clearCurrentProfile} from "../../actions/profileActions";


class Navbar extends Component {

	onLogoutClick = (event) =>{
		event.preventDefault();
		this.props.logoutUser();
		this.props.clearCurrentProfile();
	}
	render(){
		const {isAuthenticated, user}  = this.props.auths;

		const authLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/feed"> Post Feed
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/dashboard"> Dashboard
					</Link>
				</li>
				<li className="nav-item">
					<a href="##" className="nav-link" onClick={this.onLogoutClick}>
						<img src={user.avatar}
						alt={user.name}
						className = "rounded-circle"
						title="Must have Gravatar Account for Image"
						style={{width:'25px', marginRight:'5px'}}/>
						Logout
					</a>
				</li>
			</ul>
		);

		const guestLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/register">Sign Up</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/login">Login</Link>
				</li>
			</ul>
		);
		return(
			<div>
				<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
					<div className="container">
						<Link className="navbar-brand" to="/">DevTalk</Link>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="mobile-nav">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item">
									<Link className="nav-link" to="/profiles"> Developers
									</Link>
								</li>
							</ul>

							{isAuthenticated ? authLinks : guestLinks}
						</div>
					</div>
				</nav>
			</div>
		)
	}
}

Navbar.propTypes = {
	logoutUser:PropTypes.func.isRequired,
	auths:PropTypes.object.isRequired,
}

const mapStateToProps = (state) =>({
	auths:state.authReducer,
})

export default connect(mapStateToProps, {logoutUser, clearCurrentProfile})(Navbar);
