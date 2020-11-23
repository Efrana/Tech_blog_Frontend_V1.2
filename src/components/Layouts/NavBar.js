import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import SearchBar from "./SearchBar"
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
class NavBar extends Component {
	constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
	}
	openModal = () => this.setState({ isModalOpen: true });
	// closeModal = () => this.setState({ isModalOpen: false })
	
	render() {
		return (
			<React.Fragment>
				<nav className="navbar navbar-default  nav-top-bg" role="navigation">
					<div className="container">
						<div className="row">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse"
									data-target="#bs-example-navbar-collapse-1">
									<span className="sr-only">
										Toggle navigation
						           </span>
									<span className="icon-bar">
									</span>
									<span className="icon-bar">
									</span>
									<span className="icon-bar">
									</span>
								</button>
								<Link to="/"  className="navbar-brand header-logo" href="index.html"><img src="https://efrana.github.io/Tech_blogV1.2UI/img/logo.png" className="img-responsive"
									alt="Logo" /></Link>
							</div>
							<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<ul className="nav navbar-nav navbar-right">
									<li>
										<Link to="/ask_question" href="askQuestion.html">AskQuestion</Link>
									</li>
									<li>
										<span className="fa-stack fa-lg circle" style={{ fontSize: "7px" }}>
											<i className="fa fa-circle fa-stack-2x" style={{ marginLeft: "7px" }}></i>
											<i className="fa fa-inverse fa-stack-1x" style={{ marginLeft: "7px" }}><strong>12</strong></i>
											<i className="fa fa-bell-o bell_icon" aria-hidden="true" style={{ fontSize: "16px" }}></i>
										</span>
									</li>
									<li>
										<a href="#" data-toggle="modal" data-target="#mymodal"  onClick={this.openModal}>Login</a>
									</li>
									<li>
										<a href="#" className="btn  btn-sm btn-user" data-toggle="modal" data-target="#signupmodal" onClick={this.openModal}>Sign
										Up
									</a>
									</li>
								</ul>
								<SearchBar />
							</div>
						</div>
					</div>
				</nav>
				<Login show={this.state.isModalOpen} />
				<Signup show={this.state.isModalOpen} />

			</React.Fragment>
		)
	}

}
export default NavBar