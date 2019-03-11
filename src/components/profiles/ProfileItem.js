import React, {Component} from "react";
import {Link} from "react-router-dom";

import isEmpty from "../../validation/isEmpty";

class ProfileItem extends Component{
	render(){
		const {profile} = this.props;
		return(
			<div className="card card-body bg-light mb-3">
				<div className="row">
					<div className="col-2">
						<img src="profile.user.avatar" alt="" classname="rounded-circle"/>
					</div>
					<div className="col-lg-6 col-md-4 col-8">
						<h3>{profile.user.name}</h3>
						<p>{profile.status} {isEmpty(profile.company)? null: profile.company}</p>
						<p>{isEmpty(profile.location)? null : profile.location}</p>
						<Link to={`/profile/${profile.handle}`} className="btn btn-info">view profile</Link>
					</div>
				</div>
			</div>
		)

	}
}

export default ProfileItem;
