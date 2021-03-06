import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
//Components
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";

import {createProfile} from "../../actions/profileActions";

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
	componentWillReceiveProps(nextProps){
		if(nextProps.errors){
			// console.log("here",nextProps.errors)
			this.setState({errors:nextProps.errors});
		}
	}
	render(){
		const {errors, displaySocialInputs}  = this.state;
		const options = [
			{label:'* Select Professional Status', value:0},
			{label:'Developer', value:'Developer'},
			{label:'Junior Developer', value:'Junior Developer'},
			{label:'Senior Developer', value:'Senior Developer'},
			{label:'Manager', value:'Manager'},
			{label:'Student', value:'Student'},
			{label:'Instructor', value:'Instructor'},
			{label:'Intern', value:'Intern'},
			{label:'Other', value:'Other'}
		]
		let socialInputs;
		if(displaySocialInputs){

			socialInputs = (
				<div>
					<InputGroup
						placeholder="twitter profile url"
						name="twitter"
						icon="fab fa-twitter"
						value={this.state.twitter}
						onChange={this.onChange}
						error={errors.twitter}
					/>
					<InputGroup
						placeholder="facebook profile url"
						name="facebook"
						icon="fab fa-facebook"
						value={this.state.facebook}
						onChange={this.onChange}
						error={errors.facebook}
					/>
					<InputGroup
						placeholder="linkedin profile url"
						name="linkedin"
						icon="fab fa-linkedin"
						value={this.state.linkedin}
						onChange={this.onChange}
						error={errors.linkedin}
					/>
					<InputGroup
						placeholder="youtube channel url"
						name="youtube"
						icon="fab fa-youtube"
						value={this.state.youtube}
						onChange={this.onChange}
						error={errors.youtube}
					/>
					<InputGroup
						placeholder="instagram profile url"
						name="instagram"
						icon="fab fa-instagram"
						value={this.state.instagram}
						onChange={this.onChange}
						error={errors.instagram}
					/>
				</div>
			)
		}
		 // console.log(this.state.errors);
		return(
			<div className='create-profile'>
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Create You Profile</h1>
							<p className="lead text-center">
								Let's Get Some Information to Make Your Profile Stand Out
							</p>
							<small className="d-block pb-3">* = required fields</small>
							<form onSubmit={this.onSubmit}>
								<TextFieldGroup
									placeholder="* Profile Handle"
									name="handle"
									value = {this.state.handle}
									onChange={this.onChange}
									error = {errors.handle}
									info = "A unique handle for your profile URL. Your full name, company name, nickname"
								/>
								<SelectListGroup
									placeholder="Status"
									name="status"
									value = {this.state.status}
									onChange={this.onChange}
									options={options}
									error = {errors.status}
									info = "Career Status"
								/>

								<TextFieldGroup
									placeholder="Company"
									name="company"
									value={this.state.company}
									onChange={this.onChange}
									errors={errors.company}
									info="Company you currently work for"
								/>
								<TextFieldGroup
									placeholder="Website"
									name="website"
									value={this.state.website}
									onChange={this.onChange}
									errors={errors.website}
									info="Your website"
								/>
								<TextFieldGroup
									placeholder="Location"
									name="location"
									value={this.state.location}
									onChange={this.onChange}
									errors={errors.location}
									info="City or State"
								/>
								<TextFieldGroup
									placeholder="* Skills"
									name="skills"
									value={this.state.skills}
									onChange={this.onChange}
									error={errors.skills}
									info = "Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
								/>
								<TextFieldGroup
									placeholder="GitHub Username"
									name="githubusername"
									value={this.state.githubusername}
									onChange={this.onChange}
									error={errors.githubusername}
									info = "If you want your latest repos to be displayed, add your GitHub username"
								/>
								<TextAreaFieldGroup
									placeholder="Short Bio"
									name="bio"
									value={this.state.bio}
									onChange={this.onChange}
									error={errors.bio}
									info="Tell us about yourself"
								/>

								<div className="mb-3">
									<button type="button" className="btn -btn-light" onClick={() =>{
										// e.preventDefault();
										this.setState({displaySocialInputs:!this.state.displaySocialInputs})
										console.log(this.state.displaySocialInputs);
									}}>Add Social Media Network Links</button>
										<span className="text-muted">Optional</span>
								</div>

								{socialInputs}
								<input type="submit" value="submit" className="bn btn-info btn-block mt-4"/>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}

	onSubmit =(event) =>{
		event.preventDefault();
		// console.log("submit");

		const profileData={
			handle:this.state.handle,
			company:this.state.company,
			website:this.state.website,
			location:this.state.location,
			status:this.state.status,
			skills:this.state.skills,
			githubusername:this.state.githubusername,
			bio:this.state.bio,
			twitter:this.state.twitter,
			facebook:this.state.facebook,
			linkedin:this.state.linkedin,
			youtube:this.state.youtube,
			instagram:this.state.instagram,
		}

		this.props.createProfile(profileData, this.props.history);
	}
	onChange = (e) =>{
		this.setState({[e.target.name]:e.target.value});
	}
}

CreateProfile.propTypes = {
	profiles:PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => {
	return({
		profiles:state.profileReducer,
		errors:state.errorReducer,
	})
}
export default connect(mapStateToProps,{createProfile})(withRouter(CreateProfile));
