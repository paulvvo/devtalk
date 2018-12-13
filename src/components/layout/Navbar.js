import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {logoutUser} from "../../actions/authActions";

class Navbar extends Component {
	render(){
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

							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<Link className="nav-link" to="/register">Sign Up</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/login">Login</Link>
								</li>
							</ul>
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

export default connect(mapStateToProps, {logoutUser})(Navbar);
