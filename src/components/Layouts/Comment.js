import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Config from "../BaseUrl/Config";
import moment from 'moment';
import jwt_decode from "jwt-decode";

class CommentPart extends Component {
    constructor(props) {
        super(props);

        this.onChangeBody = this.onChangeBody.bind(this);
        this.onChangeControl = this.onChangeControl.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            body: '',
            errors: '',
            Comments: [],
            edit: false,
            editedId: '',
            currentUserId: '',

            inputeControl: false

        }
    }

    componentDidMount() {
        this.decodedToken()
        this.setState({
            Comments: this.props.Comments,

        })

    }

    decodedToken() {
        const token = window.localStorage.getItem('jwt-token')
        let decoded = jwt_decode(token);
        this.setState({
            currentUserId: decoded.id
        })

    }

    onChangeControl() {
        this.setState({
            inputeControl: true
        })

    }

    onChangeBody(e) {
        this.setState({
            body: e.target.value
        });
    }

    editComment(Id) {
        axios.get(`${Config.apiUrl}/api/comment/` + Id)
            .then(response => {
                this.setState({
                    body: response.data.details.comment.body,
                    editedId: Id,
                    edit: true,
                    inputeControl: true
                });
            })
            .catch((error) => console.log(error));
    }


    delete(deleteUrl) {
        const token = window.localStorage.getItem('jwt-token')
        axios.delete(deleteUrl, {
            headers: {

                'Authorization': `${token}`
            }
        },
        )
            .then((res) => {
                console.log(res)
                this.props.manageState()
            })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            body: this.state.body,
            commentableId: this.props.Id,
            commentableType: this.props.Type
        };
        const token = window.localStorage.getItem('jwt-token')
        const config = {
            headers: {
                'Authorization': `${token}`
            }
        }

        if (this.state.edit === false) {
            axios.post(`${Config.apiUrl}/api/comment`, obj, config)

                .then((res) => {
                    console.log(res)
                    this.setState({
                        body: ''
                    })
                    this.props.manageState()
                })
                .catch((error) =>
                    console.log("efrana", error.message),

                    this.setState({
                        errors: "no comment here!!"
                    })
                )
        }
        else {

            axios.put(`${Config.apiUrl}/api/comment/` + this.state.editedId, obj, config)
                .then((res) => {
                    console.log(res)
                    this.setState({
                        body: ''
                    })
                    this.props.manageState()
                })
                .catch((error) =>
                    console.log("efrana", error.body.msg),
                    this.setState({
                        errors: "no comment here!!"
                    })
                )
        }
    }

    render() {
        return (
            <React.Fragment>
                <div class="share_div">

                    {this.props.Comments && this.props.Comments.map((comment, index) => (
                        <div>
                            <hr />
                            <p class="comment_div"> {comment.body} -
								            <sapn class="name-col">Tom</sapn>
                                <span class="date-col"> 55 mins ago</span>
                                <a href="#"><span class="edit_ic"><i class="fa fa-edit"></i></span></a>
                                <a href="#"><span class="edit_ic"><i class="fa fa-trash-o"></i></span></a>
                            </p>
                        </div>
                    ))}
                    <hr />
                    <textarea class="hide textInput form-control" id="textInput" name="story" rows="2" cols="84"
                        style={{ padding: "10px" }} placeholder="write your comment here..."
                        value={this.state.body}
                        onChange={this.onChangeBody}
                    ></textarea>
                    <a href="#">
                        <p class="date-col" onclick="onButtonClick()"><i class="fa fa-comment-o" aria-hidden="true"></i> add comment</p>
                    </a>

                </div>
            </React.Fragment>
        )
    }

}
export default CommentPart