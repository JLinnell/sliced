import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/userActions';

class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			emailError: '',
			password: '',
			passwordError: ''
		}
	}
			
	//takes obj key as name so you only have to input function once (so all info is can be used)
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
			  errors.emailError = "Valid email required";
			}

			if (this.state.password.length < 10) {
				isError = true;
				console.log("Password needs to be atleast 10 characters long");
				errors.passwordError = "Valid password required";
			  }
		
			this.setState({
			  ...this.state,
			  ...errors
			});
		
			return isError;
		  };
	
		loginUser(e){
			e.preventDefault();
			const err = this.validate();
			if (!err) {
			this.props.loginUser(this.state)
			this.props.history.push('/home')

		
			this.setState({
			  email: "",
			  emailError: "",
			  password: "",
			  passwordError: ""

			});
		
		  }

		}
	
	 
	render() {
		return (
			<div className="container">
			    <div className="row">
			        <div className="form_bg">
			            <form className="logInForm">
			                 <h2 className="text-center">Log In</h2>
			                <br/>
			                <div className="form-group">
			                    <input
									onChange={this.handleChange.bind(this)}
									name="email"
			                    	className="form-control"
			                    	type="text"
									placeholder="email"
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
									placeholder="password"
									value={this.state.password}
			                    />
			                </div>
							<p>{this.state.passwordError}</p>
			                <br/>
			                <div className="align-center">
                        <button
                          className="btn-success"
						onClick={e => this.loginUser(e)}> 
						Log In
                        </button>
						
                        <div className="demoUser">
							<div className="col-6">
								<p className="demo-creds">Demo User</p>
							</div>
							<div className="col-6">
								<p className="demo">Email: <span className="italic">demo@demo.com</span></p>
							</div>
							<div className="col-6">
								<p className="demo">Password: <span className="italic">passwordispassword</span></p>
							</div>
							</div>
                      </div>
			                <div>Don't have an account?<Link to={'/signUp'}> Sign Up </Link>instead</div>
			            </form>
			        </div>
			    </div>
			</div>
				
		)
	}
}


const mapStateToProps = (rootReducer) => {
	return {user: rootReducer.user}
			
}

export default connect(mapStateToProps, {loginUser})(LogIn);