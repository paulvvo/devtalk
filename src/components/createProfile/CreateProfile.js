import React, {Components} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";


class CreateProfile extends Component{
	constructor(){
		super();
		this.state = {
			displaySocialInputs:false,
			handle: '',
			company: '',
			website: '',
			location: '',
			status: '',
			skills: '',
			githubusername: '',
			bio: '',
			twitter: '',
			facebook: '',
			linkedin: '',
			youtube: '',
			instagram: '',
			errors: {},
		}
	}
	render(){
		return(
			<div></div>
		)
	}
}

CreateProfile.propTypes = {
	profile:PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => {
	return({
		profiles:state.profileReducer,
		errors:state.errorReducer,
	})
}
export default connect(null)(CreateProfile);