import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
class Comment extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="share_div">
                    <hr />
                    <p class="comment_div">Is OnActionExecuting the answer? I've just recognized that my
                    controllers had
                    ControllerBase as base class. After changing it to Controller as super class it,
                    I've noticed this method. Could this be the solution? -
								            <sapn class="name-col">Tom</sapn>
                        <span class="date-col"> 55 mins ago</span>
                        <a href="#"><span class="edit_ic"><i class="fa fa-edit"></i></span></a>
                        <a href="#"><span class="edit_ic"><i class="fa fa-trash-o"></i></span></a>
                    </p>

                    <hr />
                    <p class="comment_div">Is OnActionExecuting the answer? I've just recognized that my
                    controllers had
                    ControllerBase as base class. After changing it to Controller as super class it,
                    I've noticed this method. Could this be the solution? -
							                     	<sapn class="name-col">Tom</sapn>
                        <span class="date-col"> 55 mins ago</span>
                        <a href="#"><span class="edit_ic"><i class="fa fa-edit"></i></span></a>
                        <a href="#"><span class="edit_ic"><i class="fa fa-trash-o"></i></span></a>
                    </p>

                    <hr />
                    <p class="comment_div">Is OnActionExecuting the answer? I've just recognized that my
                    controllers had
                    ControllerBase as base class. After changing it to Controller as super class it,
                    I've noticed this method. Could this be the solution? -
								             <sapn class="name-col">Tom</sapn>
                        <span class="date-col"> 55 mins ago</span>
                        <a href="#"><span class="edit_ic"><i class="fa fa-edit"></i></span></a>
                        <a href="#"><span class="edit_ic"><i class="fa fa-trash-o"></i></span></a>
                    </p>
                    <hr />
                    <textarea class="hide textInput form-control" id="textInput" name="story" rows="2" cols="84"
                        style={{ padding: "10px" }} placeholder="write your comment here..."></textarea>

                    <a href="#">
                        <p class="date-col" onclick="onButtonClick()"><i class="fa fa-comment-o" aria-hidden="true"></i> add comment</p>
                    </a>

                </div>
            </React.Fragment>
        )
    }

}
export default Comment