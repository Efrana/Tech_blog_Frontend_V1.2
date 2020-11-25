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
			password: null,
			email: null,
			userName: null,
			modal: '',
			form_empty: '',

			errors: {
				password: '',
				email: '',
				userName: '',
			}
		}
	}

	// validation part start
	handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		let errors = this.state.errors;

		switch (name) {
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

			case 'userName':
				errors.userName =
					value.length < 3 || value.length > 8
						? 'First Name must be between 3 to 8 characters!'
						: '';
				break;

			default:
				break;
		}


		this.setState({ errors, [name]: value });
	}

	
	handleSubmit = (event, history) => {
		event.preventDefault();
		if (validateForm(this.state)) {

			const obj = {
				userName: this.state.userName,
				email: this.state.email,
				password: this.state.password
			};

			axios.post(`${Config.apiUrl}/api/sign-up`, obj)
				.then(res => console.log(res.data));


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
										<input type="username" class="form-control fontcontrol" id="text"
											placeholder="Username.." name="userName"
											onChange={this.handleChange} />
										<div>
											{errors.userName.length > 0 &&
												<span className='error error_msg' style={this.error_msg}>{errors.userName}</span>}
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