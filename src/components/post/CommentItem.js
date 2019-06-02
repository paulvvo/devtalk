import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

//Actions
import {deleteComment} from "../../actions/postActions";

class CommentItem extends Component{
		onDeleteClick(postId,commentId){
		console.log(postId, commentId, this);
	}
	render(){
		const {comment, postId, auth} = this.props;
		return(
			<div className="card card-body mb-3">
				<div className="row">
					<div className="col-md-2">
						<a href="/profiles">
							<img src={comment.avatar} alt="" className="rounded-circle d-none d-md-block"/>
							<br/>
							<p className="text-center">{comment.name}</p>
						</a>
					</div>
					<div className="col-md-10">
						<p className="lead">{comment.text}</p>
					</div>
					{
						comment.user === auth.user.id
						? <button type="button" className="btn btn-danger mr-1" onClick={this.onDeleteClick.bind(this, postId, comment._id)}>Delete</button>
						: null
					}
				</div>
			</div>
		)
	}
}

CommentItem.propTypes = {
	deleteComment: PropTypes.func.isRequired,
	comment : PropTypes.object.isRequired,
	postId : PropTypes.string.isRequired,
	auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) =>({
	auth: state.authReducer,
})
export default connect(mapStateToProps, {deleteComment})(CommentItem);