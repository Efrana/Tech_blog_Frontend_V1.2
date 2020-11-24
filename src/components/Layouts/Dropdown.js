import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import jwt_decode from "jwt-decode";

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUserName: '',
            image: ''

        };
    }

    componentDidMount() {

        if (!window.localStorage.getItem('jwt-token')) {
        }
        else {
            this.decodedToken()
        }
    }

    decodedToken() {
        const token = window.localStorage.getItem('jwt-token')
        const imagesrc_pay = window.localStorage.getItem('imagesrc_pay')
        let decoded = jwt_decode(token);
        this.setState({
            currentUserName: decoded.firstName,
            image: imagesrc_pay
        })

    }

    render() {
        return (
            <React.Fragment>
                <li>
                    <p class="profileIcon">{this.state.currentUserName}</p>
                </li>
                <li>
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i
                            class="fa fa-angle-down angleIcon"></i></a>
                        <ul class="dropdown-menu menudesign">
                            <li>
                                <div>
                                    <img  class="main-img" src={" " + this.state.image}/>
                                        <a class="profileIcon2">{this.state.currentUserName}</a>
                                        </div>
                                    </li>
                                <hr />
                                <li>
                                    <a href="#" class="mainMenu">
                                    
                                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        <span class="logout" 
                                        onClick={() => {
                                            this.props.logout()
                                        }}
                                        >Logout</span></a></li>
                                <li>

                                    <a href="profile.html">
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                        <span class="logout">My Account</span></a></li>
                                </ul>
                            </div>
                        </li>
            </React.Fragment>
        )
    }

}
export default Dropdown