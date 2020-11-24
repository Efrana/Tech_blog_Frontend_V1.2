import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Config from "../BaseUrl/Config";

const validEmailRegex = RegExp(
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = ({ errors, ...rest }) => {
	let valid = true;
  
	// validate form errors being empty
	Object.values(errors).forEach(val => {
	  val.length > 0 && (valid = false);
	});
  
	// validate the form was filled out
	Object.values(rest).forEach(val => {
	  val === null && (valid = false);
	});
  
	return valid;
  };
class Signup extends Component {
	error_msg = {
		fontSize: 11,
		color: 'red'
	}
	constructor(props) {
		super(props);


		this.state = {
			selectedFile:null,
			// userName:null,
			phoneNo: null,
			password: null,
			email: null,
			firstName: null,
			lastName: null,
			modal: '',
			form_empty: '',
	  
			errors: {
			  phoneNo: '',
			  password: '',
			  email: '',
			  firstName: '',
			  lastName: '',
			}
		  }
	}

	// validation part start
	handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		let errors = this.state.errors;

		switch (name) {
			case 'phoneNo':
				errors.phoneNo =
					value.length < 10
						? 'phoneNo must be 10 characters!'
						: '';
				break;

			case 'email':
				errors.email =
					validEmailRegex.test(value)
						? ''
						: 'Email is not valid!';
				break;

			case 'password':
				errors.password =
					value.length < 8
						? 'Password must be at least 8 characters long!'
						: '';
				break;

			case 'firstName':
				errors.firstName =
					value.length < 3 || value.length > 8
						? 'First Name must be between 3 to 8 characters!'
						: '';
				break;

			case 'lastName':
				errors.lastName =
					value.length < 4 || value.length > 8
						? 'Last Name must be between 4 to 6 characters!'
						: '';
				break;

			default:
				break;
		}


		this.setState({ errors, [name]: value });
	}


	fileSelectHandler = event => {
		console.log(event.target.files[0])
		this.setState({
			selectedFile: event.target.files[0]
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (validateForm(this.state)) {
			const obj = {
				profile: this.state.selectedFile,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				password: this.state.password,
				email: this.state.email,
				phoneNo: this.state.phoneNo
			};
			const formData = new FormData();
			formData.append('profile', obj.profile)
			formData.append('userName', obj.firstName)
			formData.append('firstName', obj.firstName)
			formData.append('lastName', obj.lastName)
			formData.append('password', obj.password)
			formData.append('email', obj.email)
			formData.append('phoneNo', obj.phoneNo)
			const config = {
				headers: {
					'content-type': 'multipart/form-data'
				}
			}
			axios.post(`${Config.apiUrl}/api/sign-up`, formData, config)
				.then(res => console.log(res.data));
			// this.props.history.push('/login');

		} else {
			console.error('Invalid Form')

			this.setState({
				form_empty: "Invalid form please input value"
			})

		}
	}
	render() {
		const { errors } = this.state;
		return (
			<React.Fragment>
				<div class="modal" tabindex="-1" role="dialog" id="signupmodal" show={this.props.isModalOpen} onHide={this.closeModal}>
					<div class="modal-dialog modal_width" role="document">
						<div class="modal-content" style={{ borderRadius: "0px" }}>
							<i class="fa fa-window-close window_close_icon"></i>
							<div class="modal-header boder-bottom-color">
								<p class="modal_p">Sign up now</p>
								<p class="modal_sugg">Fill in the form below to get insant access:</p>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								</button>
							</div>
							<div class="modal-body modal-body-design2">
								<form onSubmit={this.handleSubmit}>
									<div class="form-group">
										<input type="username" class="form-control fontcontrol" name="firstName"
											placeholder="Firstname.."
											onChange={this.handleChange} />
										<div>
											{errors.firstName.length > 0 &&
												<span className='error error_msg' style={this.error_msg}>{errors.firstName}</span>}
										</div>
									</div>
									<div class="form-group">
										<input type="username" class="form-control fontcontrol" id="text"
											placeholder="Lastname.." name="lastName"
											onChange={this.handleChange} />
										<div>
											{errors.lastName.length > 0 &&
												<span className='error error_msg' style={this.error_msg}>{errors.lastName}</span>}
										</div>
									</div>
									<div class="form-group">
										<input type="email" class="form-control fontcontrol" id="text"
											name="email" placeholder="Email.."
											onChange={this.handleChange} />
										<div>
											{errors.email.length > 0 &&
												<span className='error error_msg' style={this.error_msg}>{errors.email} </span>}
										</div>
									</div>
									<div class="form-group">
										<input type="password" class="form-control fontcontrol" id="text" name="password"
											placeholder="Password.."
											onChange={this.handleChange} />
										<div>
											{errors.password.length > 0 &&
												<span className='error error_msg' style={this.error_msg}>{errors.password}</span>}
										</div>
									</div>
									<div class="form-group">
										<input type="phone" class="form-control fontcontrol" id="text"
											name="phoneNo"
											placeholder="Phone.."
											onChange={this.handleChange} />
										<div>
											{errors.phoneNo.length > 0 &&
												<span className='error error_msg' style={this.error_msg}>{errors.phoneNo} </span>}
										</div>
									</div>
									<div>
										{/* <p>Upload a Profile image</p> */}
										<input type="file" id="myFile" name="filename" onChange={this.fileSelectHandler} />
									</div>

									<button type="submit" class="btn btn-primary btn_secoend" >Sign up!</button>
								</form>
							</div>
							<div class="modal-footer boder-bottom-color">
								<p class="modal_sugg2">Have an Account?<a href="#" class="signup"><strong> Login
								</strong></a></p>
							</div>
						</div>
					</div>
				</div>

			</React.Fragment>
		)
	}

}
export default Signup