import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
// import {registerUser, loginUser} from '../../actions/userActions';
import './Modal.css';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			emailError: '',
			password: '',
			passwordError: ''
		}
	}
	handleChange(event) { 
		const stateKey = event.currentTarget.attributes["name"].value; 
		this.setState({[stateKey]: event.currentTarget.value});
		console.log(event.currentTarget.attributes["name"].value);
		console.log(event.currentTarget.value);
		}


		validate = () => {
			let isError = false;
			const errors = {
			  emailError: "",
			  passwordError: ""
			};

		
			if (this.state.email.indexOf("@") === -1) {
			  isError = true;
			  console.log("Requires valid email");
			  errors.emailError = "Requires valid email";
			}

			if (this.state.password.length < 10) {
				isError = true;
				console.log("Password needs to be atleast 10 characters long");
				errors.passwordError = "Password needs to be atleast 10 characters long";
			  }
		
			this.setState({
			  ...this.state,
			  ...errors
			});
		
			return isError;
		  };
		
		  registerUser(e) {
			e.preventDefault();
			console.log(this.state);
			const err = this.validate();
			if (!err) {
			  this.props.registerUser(this.state)
			  this.props.history.push('/login')

			  this.setState({
				email: "",
				emailError: "",
				password: "",
				passwordError: ""
			  });
			}
		  };
		
	
	render() {
		return (
			<div className="container">
			    <div className="row">
			        <div className="form_bg">
			             <form className="signUpForm"  >
			                 <h2 className="text-center">Sign Up</h2>
			                <br/>
			                <div className="form-group">
			                    <input
									name="email"
									onChange={this.handleChange.bind(this)}
									// onChange={e => this.change(e)}
			                    	className="form-control"
			                    	type="text"
									placeholder="email"
									// validate={[required, nonEmpty, isTrimmed]}
									value={this.state.email}
			                    />
								<p>{this.state.emailError}</p>
			                </div>
			                <div className="form-group">
			                    <input
									name="password"
									onChange={this.handleChange.bind(this)}
			                    	className="form-control"
			                    	type="password"
									placeholder="password (at least 10 characters)"
									value={this.state.password}
			                    />
			                </div>
							<p>{this.state.passwordError}</p>
							<br/>
			                
			                <div className="align-center">
			                   <button
	   								className="btn-success"
									   type="submit"
									onClick={e => this.registerUser(e)}
									   >
	   							Sign Up
	   							</button>
							</div> 
							
			                <div>Already have an account?<Link to={'/logIn'}>Log In</Link></div>
			            </form>
			        </div>
			    </div>
			</div>
			
		)
	}
}

// const mapStateToProps = (rootReducer) => {
//     return {user: rootReducer.user}
// }

// export default connect(mapStateToProps, {registerUser, loginUser})(SignUp);

export default SignUp;