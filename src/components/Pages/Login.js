import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom';
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
class Login extends Component {
    /* Style for validation error message */
    error_msg = {
        fontSize: 11,
        color: 'red'
    }

    constructor(props) {
        super(props);
        this.state = {
            isModalClose: false,
            email: null,
            password: null,
            form_empty: '',
            modal: '',
            errors: {
                email: '',
                password: ''
            },
            token: '',
            redirectPage: false
        };
    }
    closeModal = () => this.setState({ isModalClose: false })

    componentDidMount() {
        if (window.localStorage.getItem('jwt-token')) {
            this.setState({
                redirectPage: true
            })

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

            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event, history) => {
        event.preventDefault();
        if (validateForm(this.state)) {
            console.info('Login Successfully!')
            console.info(this.state)

            const obj = {
                email: this.state.email,
                password: this.state.password
            };

            axios.post(`${Config.apiUrl}/api/sign-in`, obj)
                .then(res => {
                    window.localStorage.setItem('jwt-token', res.data.data.token)
                    window.localStorage.setItem('imagesrc_pay', res.data.data.imageUrl)
                    this.setState({
                        redirectPage: true
                    })

                });


        } else {
            console.error('Invalid Form')
            this.setState({
                form_empty: "Invalid form please input value"
            })

        }
    }
    render() {
        const { errors, form_empty, redirectPage } = this.state;
        if (redirectPage) {
            return <Redirect to='/' />
        }
        return (
            <React.Fragment>
                <div class="modal" tabindex="-1" role="dialog" id="mymodal" show={this.props.isModalOpen} onHide={this.state.isModalClose}>
                    <div class="modal-dialog modal_width" role="document">
                        <div class="modal-content" style={{ borderRadius: "0px" }}>
                            <i class="fa fa-window-close window_close_icon" onClick={this.closeModal}></i>
                            <div class="modal-header boder-bottom-color">
                                <p class="modal_p">Login To Our Site</p>
                                <p class="modal_sugg">Enter your username and password to log on :</p>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                </button>
                            </div>
                            <div class="modal-body modal-body-design2">
                                <form onSubmit={this.handleSubmit}>
                                    <div class="form-group">
                                        <input type="email" class="form-control fontcontrol" id="text"
                                            name="email" placeholder="Email.."
                                            onChange={this.handleChange} />
                                        <div>
                                            {errors.email.length > 0 &&
                                                <span className='error' style={this.error_msg}>{errors.email}</span>}
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control fontcontrol" id="text"
                                            name="password"
                                            onChange={this.handleChange}
                                            placeholder="Password.." />
                                        <div>
                                            {errors.password.length > 0 &&
                                                <span className='error' style={this.error_msg}>{errors.password}</span>}
                                        </div>
                                    </div>
                                    <p class="modal_p2">forget password?</p>
                                    <button type="submit" class="btn btn-primary btn_secoend" style={{ borderRadius: "2px" }}>Sign in!</button>
                                </form>
                            </div>
                            <div class="modal-footer boder-bottom-color">
                                <p class="modal_sugg2">Don't Have an Account?<a href="#" class="signup"><strong> Sign
								up</strong></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}
export default Login