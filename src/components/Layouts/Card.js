import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Config from "../BaseUrl/Config";
// import axios from "axios";
import moment from 'moment';

class Card extends Component {
	constructor(props) {
        super(props);
        this.state = {
            tags: [],
        };
    }
   render(){
	moment('timestamp').format('MMMM Do YYYY')
       return(
        <React.Fragment>
        	{/* <!-- post start  --> */}
				<div className="post_wrap">
					<div className="post_view_answer pull-left">
						<div className="activity-summary">
							<b>
								10
							</b>
							view's
						</div>
						<div className="activity-summary">
							<i className="fa fa-circle-o">
							</i>
							<div className="line-y">
							</div>
							<i className="fa fa-circle-o">
							</i>
						</div>
						<div className="activity-summary">
							<b>
							{this.props.question.count}
							</b>
							answer's
						</div>
					</div>

					<div className="post_article pull-left">

						<h3><Link to={"/details/"+ this.props.question.id}>{this.props.question.title}
								</Link></h3>
						<div className="details">
							<ul>
								<li><span className="user_padding"><i className="fa fa-user" aria-hidden="true"></i></span>
								By {this.props.question.User.firstName}
								</li>
								<li>{moment(this.props.question.createdAt).format('MMMM Do, YYYY')}</li>
								<li>Webdesign</li>
							</ul>
						</div>
						<div className="content">
							<p>It is a long established fact that a reader will be distracted by
								the readable content of a page when looking at its layout. The point
								of using Lorem Ipsum is that it has a more-or-less normal distribution </p>
						</div>
						<div className="tags">
						{this.props.question.tags.map((tag, index) => (
                                        <Link to={"/?filter=" + tag} key={index}>
											<span className="label label-default">{tag} </span>
                                        </Link>
                                    ))}
						</div>

					</div>
				</div>
				{/* <!-- post end  --> */}
        </React.Fragment>
       )
   }

}
export default Card