import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
//Components
import PostItem from "../posts/PostItem";
import Loading from "../common/Loading";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";
//Actions
import {getPost} from "../../actions/postActions";

class Post extends Component{
	componentDidMount(){
		this.props.getPost(this.props.match.params.id);
	}
	render(){
		const {post, loading} = this.props.post;
		// let postContent, postForm, commentFeed;
		let postContent
		if(post === null || loading || Object.keys(post).length ===0){
			postContent = <Loading/>
			// postForm = null;
		}else{
			// postContent = <PostItem post={post} showActions={false}/>
			// postForm = <CommentForm postId={post._id}/>
			postContent = (
				<div>
					<PostItem post={post} showActions={false}/>
					<CommentForm postId={post._id}/>
					<CommentFeed postId={post._id} comments={post.comments}/>
				</div>
			)
		}
		return(
			<div className="post">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<Link to="/feed" className="btn btn-light mb-3">
								Back to Feed
							</Link>
							{postContent}
							{/*{postForm}*/}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Post.propTypes ={
	post: PropTypes.object.isRequired,
	getPost: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
	post: state.postReducer
})
export default connect(mapStateToProps, {getPost})(Post);
