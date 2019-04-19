import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class PostItem extends Component{

	render(){
		const {post, auth} = this.props;
		// console.log(post.text);
		console.log(auth);
		return(
			<div class="posts">

				<div class="card card-body mb-3">
					<div class="row">
						<div class="col-md-2">
							<a href="profile.html">
								<img class="rounded-circle d-none d-md-block" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
									alt="" />
							</a>
							<br />
							<p class="text-center">John Doe</p>
						</div>
						<div class="col-md-10">
							<p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus
								nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis
								eveniet cum cupiditate aliquam?</p>
							<button type="button" class="btn btn-light mr-1">
								<i class="text-info fas fa-thumbs-up"></i>
								<span class="badge badge-light">4</span>
							</button>
							<button type="button" class="btn btn-light mr-1">
								<i class="text-secondary fas fa-thumbs-down"></i>
							</button>
							<a href="post.html" class="btn btn-info mr-1">
								Comments
							</a>

						</div>
					</div>
				</div>

			</div>
		)
	}
}
PostItem.propTypes = {
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	auth: state.authReducer
})
export default connect(mapStateToProps,{})(PostItem);
