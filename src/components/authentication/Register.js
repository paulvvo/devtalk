import React, {Component} from 'react';

class Register extends Component {
	constructor(props){
		super(props);
		this.state={
			name:"",
			email:"",
			password:"",
			password2:"",
			errors:{},
		}
	}

	onChange = (event) =>{
	//could've done above or
	//bind class register to onChange function
	//onChange(event){
		// console.log(event.target.value);
		// console.log(event.target.name);
		// console.log([event.target.name]);
		this.setState({[event.target.name]:event.target.value});
	}

	onSubmit = (event) =>{
		event.preventDefault();

		const newUser = {
			name:this.state.name,
			email:this.state.email,
			password:this.state.password,
			password2:this.state.password2,
		}
		console.log(newUser);

		fetch('/api/auths/register', {
			method:"post",
			headers:{"Content-Type": "application/json"},
			body:JSON.stringify({
				name:this.state.name,
				email:this.state.email,
				password:this.state.password,
				password2:this.state.password2,
			})
		})
		.then(response => {
			console.log(response);
			if(response.status === 400) throw new Error("Bad Response from Server");
			return response.json()
		})
		.then(data=> console.log(data))
		.catch(err => {
			console.log(err);
			this.setState({errors:err})
		})
	}

	render(){
		return(
			<div className="register">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-8 m-auto">
		          <h1 className="display-4 text-center">Sign Up</h1>
		          <p className="lead text-center">Create your DevConnector account</p>
		          <form onSubmit={this.onSubmit}>
		            <div className="form-group">
		              <input
									type="text"
									className="form-control form-control-lg"
									placeholder="Name" name="name"
									value={this.state.name}
									onChange={this.onChange}/>
		            </div>
		            <div className="form-group">
		              <input
									type="email"
									className="form-control form-control-lg"
									placeholder="Email Address"
									name="email"
									value={this.state.email}
									onChange={this.onChange}/>
		              <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
		            </div>
		            <div className="form-group">
		              <input
									type="password"
									className="form-control form-control-lg"
									placeholder="Password"
									name="password"
									value={this.state.password}
									onChange={this.onChange}/>
		            </div>
		            <div className="form-group">
		              <input
									type="password"
									className="form-control form-control-lg"
									placeholder="Confirm Password"
									name="password2"
									value={this.state.password2}
									onChange={this.onChange}/>
		            </div>
		            <input type="submit" className="btn btn-info btn-block mt-4" />
		          </form>
		        </div>
		      </div>
		    </div>
		  </div>

		)
	}
}

export default Register;