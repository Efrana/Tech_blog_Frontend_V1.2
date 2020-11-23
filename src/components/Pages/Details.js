import React, { Component } from 'react';
import Comment from '../Layouts/Comment';
// import { Link , Redirect} from 'react-router-dom';
import SideBar from "../Layouts/SideBar";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Config from "../BaseUrl/Config";
// import CKEditor from 'ckeditor4-react';
import { Link, useLocation } from "react-router-dom";
// import SweetAlert from 'react-bootstrap-sweetalert';
import moment from 'moment';
// import swal from 'sweetalert';
class Details extends Component {
    constructor(props) {
        super(props);
        // this.onSubmit = this.onSubmit.bind(this);
        // this.onChangeBody = this.onChangeBody.bind(this);
        // this.onEditorChange = this.onEditorChange.bind(this);

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
        axios.get(`${Config.apiUrl}/api/question-answers/` + this.props.match.params.id)
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

    // hideAlert = () => {
    //     this.setState({
    //         showAlert: null
    //     });
    // }


    // delete(deleteUrl) {
        
    //     const token = window.localStorage.getItem('jwt-token')
    //     const config = {
    //         headers: {
    //             'Authorization': `${token}`
    //         }
    //     }
    //     axios.delete(deleteUrl, config)
    // }


    // onEditorChange(evt) {
    //     this.setState({
    //         body: evt.editor.getData()
    //     });
    // }


    // onChangeBody(changeEvent) {
    //     this.setState({
    //         body: changeEvent.target.value
    //     })
    // }

    // loginAlert() {
    //     this.setState({
    //         showAlert:
    //             swal("Please Login First!!")
    //     })

    // }


    // onSubmit(e) {
    //     e.preventDefault();
    //     const obj = {
    //         body: this.state.body,
    //         questionId: this.state.Question.id,
    //     };

    //     const token = window.localStorage.getItem('jwt-token')
    //     const config = {
    //         headers: {
    //             'Authorization': `${token}`
    //         }
    //     }

    //     if (token) {
    //         axios.post(`${Config.apiUrl}/api/answer`, obj, config)
    //             .then(response => {
    //                 this.setState({
    //                     body: '',
    //                     upAnswer: true
    //                 })
    //             })

    //             .catch((error) =>
    //                 // console.log("efrana", error.message),
    //                 this.setState({
    //                     errors: "Body is missing !! Your answer couldn't be submitted."
    //                 })
    //             );
    //     }
    //     else {
    //         this.loginAlert()
    //     }
    // }
    render() {
        return (
            <React.Fragment>
                <div class="container mt-4">
                    <div class="row">
                        <div class="col-md-9 col-sm-8 col-xs-12">
                            {/* <!-- post start  --> */}
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
                                            10
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
                                            <li>Webdesign</li>
                                        </ul>
                                    </div>

                                    <div class="tags">
                                    {this.state.Tags.map((tag, index) => (
                                        <Link to={"/?filter=" + tag} key={index}>
                                            <span class="label label-default">{tag} </span>
                                        </Link>
                                    ))}
                                        {/* <span class="label label-default">Jquery </span>
                                        <span class="label label-default">Php Label</span>
                                        <span class="label label-default">Laravel </span> */}
                                    </div>
                                    <br />
                                    <div class="content">
                                        <p>{this.state.Question.body} </p>
                                    </div>
                                    <div class="post_layout">
                                        <div class="code_sniepet">

                                            <pre class="pre_custom">
                                                {/* <code>
                                        pre{
                                            font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
                                            margin-bottom: 10px;
                                            overflow: auto;
                                            width: auto;
                                            padding: 5px;
                                            background-color: #eee;
                                            width: 650px!ie7;
                                            padding-bottom: 20px!ie7;
                                            max-height: 600px;
                                          }
                                    </code> */}
                                            </pre>
                                        </div>
                                    </div>
                                    <div class="post_pragraph">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laborum esse illum modi
                                            a? Reprehenderit amet, blanditiis itaque molestiae minima error quaerat laboriosam,
                                            animi debitis possimus ad, eum hic voluptas est eaque. Autem nulla totam cupiditate non.
                                            Molestias necessitatibus repellat sunt excepturi expedita, nulla nihil minima, magni
                                            totam inventore corporis.
							</p>
                                    </div>
                                    <div class="post_layout">
                                        <div class="code_sniepet">

                                            <pre class="pre_custom">
                                                {/* <code>
                                        pre{
                                            font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
                                            margin-bottom: 10px;
                                            overflow: auto;
                                            width: auto;
                                            padding: 5px;
                                            background-color: #eee;
                                            width: 650px!ie7;
                                            padding-bottom: 20px!ie7;
                                            max-height: 600px;
                                          }
                                    </code> */}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div class="quest_edit">
                                    <div class="share_div">
                                        <a href="#" class="share_btn">share</a>
                                        <a href="#" class="share_btn">edit</a>
                                        <a href="#" class="share_btn">delete</a>
                                    </div>
                                    <div class="answer_para2">
                                        <Comment/>
                                    </div>
                                </div>

                                {/* <!-- answer Start --> */}
                                <div class="col-lg-2 col-3">
                                    <h4 class="answer-head">19 Answers</h4>
                                    <div>
                                        <p class="answer_para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laborum esse illum modi
                                            a? Reprehenderit amet, blanditiis itaque molestiae minima error quaerat laboriosam,
                                            animi debitis possimus ad, eum hic voluptas est eaque. Autem nulla totam cupiditate non.
                                            Molestias necessitatibus repellat sunt excepturi expedita, nulla nihil minima, magni
                                            totam inventore corporis.
							                    </p>
                                    </div>
                                    {/* <div class="post_layout">
							<div class="code_sniepet">

								<pre class="pre2_custom">
                                    <code>
                                        pre{
                                            font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
                                            margin-bottom: 10px;
                                            overflow: auto;
                                            width: auto;
                                            padding: 5px;
                                            background-color: #eee;
                                            width: 650px!ie7;
                                            padding-bottom: 20px!ie7;
                                            max-height: 600px;
                                          }
                                    </code>
                                </pre>
							</div>
						</div> */}
                                    <div>
                                        <p class="answer_para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laborum esse illum modi
                                            a? Reprehenderit amet, blanditiis itaque molestiae minima error quaerat laboriosam,
                                            animi debitis possimus ad, eum hic voluptas est eaque. Autem nulla totam cupiditate non.
                                            Molestias necessitatibus repellat sunt excepturi expedita, nulla nihil minima, magni
                                            totam inventore corporis.
							                    </p>
                                        <div class="share_div">
                                            <a href="#" class="share_btn">share</a>
                                            <a href="#" class="share_btn">edit</a>
                                            <a href="#" class="share_btn">delete</a>
                                            <div class="poster_div">
                                                <p class="poster_para">answered 3 mins ago</p>
                                                <img src="img/profile.jpg" class="img_div" />
                                                <p class="poster_para2">jamie William</p>
                                            </div>
                                        </div>
                                        <div class="answer_para2">
                                            <Comment />
                                            <form>
                                                <div class="form-group">
                                                    <label for="exampleInputPassword1">Your Answer</label>
                                                    <textarea id="summernote" class=" textInput form-control text_area"
                                                        name="editordata"></textarea>
                                                </div>
                                            </form>
                                            <button type="button" class="btn btn-success post-btn">Post Your Answer</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- post end  --> */}

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