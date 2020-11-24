import React, { Component } from 'react';
import CommentPart from '../Layouts/Comment';
// import Answer from '../Layouts/Answer';
import SideBar from "../Layouts/SideBar";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Config from "../BaseUrl/Config";
import { Link, useLocation } from "react-router-dom";
import moment from 'moment';
import Comment from '../Layouts/Comment';

// import swal from 'sweetalert';
class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Question: [],
            Tags: [],
            Answer: [],
            count: '',
            body: '',
            questionId: '',
            questionerId: '',
            currentUserId: '',
            quser: '',
            showAlert: null,
            successAlert: null,
            errors: '',
            upAnswer: false,
            QuestionComments: [],
            AnswerComments: []
        };
    }

    componentDidMount() {

        this.details()

        if (!window.localStorage.getItem('jwt-token')) {
            console.log("no token found")
        }
        else {
            this.decodedToken()
        }
    }

    componentDidUpdate() {
        if (this.state.upAnswer) {
            this.details()
            this.setState({
                upAnswer: false
            })
        }
        else {
            console.log("not update")
        }
    }

    manageState() {
        this.setState({
            upAnswer: true

        })
    }


    details() {
        axios.get(`${Config.apiUrl}/api/question-answers/` + this.props.match.params.ID)
            .then(response => {
                this.setState({
                    Question: response.data.question_details,
                    Tags: response.data.question_details.tags,
                    Answer: response.data.question_details.Answers,
                    count: response.data.total_answer,
                    quser: response.data.question_details.User.firstName,
                    questionerId: response.data.question_details.questionerId,
                    QuestionComments: response.data.question_details.Comments,
                    AnswerComments: response.data.question_details.Answers.Comments
                });
                console.log(response.data)
            })
            .catch((error) => console.log(error));
    }


    decodedToken() {
        const token = window.localStorage.getItem('jwt-token')
        let decoded = jwt_decode(token);
        this.setState({
            currentUserId: decoded.id
        })

    }

    render() {
        console.log("heloo",this.state.Question.title)
        let { Tags, count, errors, QuestionComments, currentUserId } = this.state;
        moment('timestamp').format('MMMM Do YYYY')
        return (
            <React.Fragment>
               
                <div class="container mt-4">
                    <div class="row">
                        <div class="col-md-9 col-sm-8 col-xs-12">
                           
                            <div class="post_wrap">
                                <div class="post_view_answer pull-left">
                                    <div class="activity-summary">
                                        <b>
                                            10
						            	</b>
						           	     view's
						              </div>
                                    <div class="activity-summary">
                                        <i class="fa fa-circle-o">
                                        </i>
                                        <div class="line-y">
                                        </div>
                                        <i class="fa fa-circle-o">
                                        </i>
                                    </div>
                                    <div class="activity-summary">
                                        <b>
                                        {count}
						            	</b>
							            answer's
						            </div>
                                </div>

                                <div class="post_article pull-left">
                                    <h3>{this.state.Question.title}</h3>
                                    <div class="details">
                                        <ul>
                                            <li><span class="user_padding"><i class="fa fa-user-o" aria-hidden="true"></i></span>By
									                Admin
								            </li>
                                            <li><i class="fa fa-clock-o" aria-hidden="true"></i> April 18, 2017</li>
                                            
                                        </ul>
                                    </div>
                                    <div class="tags">
                                        {this.state.Tags.map((tag, index) => (
                                            <Link to={"/?filter=" + tag} key={index}>
                                                <span class="label label-default">{tag} </span>
                                            </Link>
                                        ))}
                                    </div>
                                    <br />
                                    <div class="content">
                                        <p>{this.state.Question.body} </p>
                                    </div>
                                </div>
                                <div class="quest_edit">
                                    <div class="share_div">
                                        <a href="#" class="share_btn">share</a>
                                        <a href="#" class="share_btn">edit</a>
                                        <a href="#" class="share_btn">delete</a>
                                    </div>
                                    <div class="answer_para2">
                                        <Comment
                                         Comments={QuestionComments}
                                         Id={this.state.Question.id}
                                         Type={"question"}
                                         manageState={() => {
                                             this.manageState()
                                         }}
                                        />
                                    </div>
                                </div>
  
                                <div class="col-lg-2 col-3">
                                    <h4 class="answer-head">{count} Answers</h4> 
                                    {/* <Answer/>  */}
                                 
                                    <div class="answer_para2">   
                                            <form>
                                                <div class="form-group" style={{ marginLeft: "57px" }}>
                                                    <label for="exampleInputPassword1">Your Answer</label>
                                                    <textarea id="summernote" class=" textInput form-control text_area"
                                                        name="editordata"></textarea>
                                                    <button type="button" class="btn btn-success post-btn">Post Your Answer</button>
                                                </div>
                                            </form>
                                        </div>
                                </div>
                            </div>
                            

                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <SideBar />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Details