import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
// import classnames from "classnames";

import {loginUser} from "../../actions/authActions";

//components
import TextFieldGroup from "../common/TextFieldGroup";


class Login extends Component{
	constructor(){
		super();
		this.state = {
			email:"",
			password:"",
			errors:{},
		}
	}

	onChange = (event) =>{
		this.setState({[event.target.name]:event.target.value});
	}
	onSubmit = (event) =>{
		event.preventDefault();
		const loggedUser = {
			email:this.state.email,
			password:this.state.password,
		}
		// console.log(loggedUser);
		this.props.loginUser(loggedUser);
	}
	componentDidMount(){
		if(this.props.auths.isAuthenticated){
			this.props.history.push('/dashboard');
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.auths.isAuthenticated){
			this.props.history.push('/dashboard');
		}
		if(nextProps.errors){
			this.setState({errors:nextProps.errors});
		}
	}

	render(){
		const {errors}  = this.state;
		return(
			<div className="login">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Log In</h1>
							<p className="lead text-center">Sign in to your DevConnector account</p>


								<form onSubmit={this.onSubmit}>
									<TextFieldGroup
										name="email"
										placeholder="Email Address"
										value={this.state.email}
										onChange ={this.onChange}
										type="email"
										error={errors.email}
									/>
									<TextFieldGroup
										name="password"
										placeholder="Password"
										value={this.state.password}
										onChange ={this.onChange}
										type="password"
										error={errors.password}
									/>

								<input type="submit" className="btn btn-info btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

Login.propTypes = {
	loginUser:PropTypes.func.isRequired,
	auths:PropTypes.object.isRequired,
	errors:PropTypes.object.isRequired,
}


const mapStateToProps = (state) => ({
	auths:state.authReducer,
	errors:state.errorReducer,
})

export default connect(mapStateToProps, {loginUser})(Login);



// JSX For Email Input (REPLACED)
// <div className="form-group">
// 	{errors.email? <div className="red">{errors.email}</div> : null}
// 	<input
// 	type="email"
// 	className={classnames('form-control form-control-lg', {
// 		'is-invalid':errors.email
// 	})}
// 	placeholder="Email Address" name="email"
// 	value={this.state.email}
// 	onChange={this.onChange}
// 	/>
// </div>

// JSX for Password Input (REPLACED)
// <div className="form-group">
// 	{errors.password? <div className="red">{errors.password}</div> : null}
// 	<input
// 	type="password"
// 	className={classnames('form-control form-control-lg', {
// 		'is-invalid':errors.password
// 	})}
// 	placeholder="Password"
// 	name="password"
// 	value={this.state.password}
// 	onChange={this.onChange}/>
// </div>
