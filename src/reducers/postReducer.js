import {ADD_POST, POST_LOADING, GET_POSTS, DELETE_POST} from "../actions/types";

const initialState = {
	post:{},
	posts:[],
	loading:false,
}

export default function (state=initialState, action) {
	switch(action.type){
		case POST_LOADING:
			return{
				...state,
				loading:true,
			}
		case GET_POSTS:
		return {
			...state,
			posts: action.payload,
			loading:false
		}
		case ADD_POST:
			return {
				...state,
				posts: [action.payload, ...state.posts]
			}

		case DELETE_POST:
			// return {
			// 	...state,
			// 	posts: state.posts.filter(post => post._id !== action.payload)
			// }
			return state;
		default:
			return state;
	}
}
