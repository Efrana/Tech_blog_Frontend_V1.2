import React, { Component } from 'react';
import { Link , Redirect,withRouter} from 'react-router-dom';
class BottomFooter extends Component {
   render(){
       return(
        <React.Fragment>
        		<footer>
		<div className="container">
			<div className="row">
				<div className="col-md-4 col-sm-4 col-xs-12">
					<a href=""><img src="https://efrana.github.io/Tech_blogV1.2UI/img/logo.png" className="img-responsive" /></a>
				</div>
				<div className="col-md-2 col-sm-2 col-xs-12">
					<h3>
						Square Reply
					</h3>
					<div className="footer-links">
						<span>
							<a href="">Questions</a>
						</span>
						<span>
							<a href="">Help</a>
						</span>
					</div>
				</div>
				<div className="col-md-2 col-sm-2 col-xs-12">
					<h3>
						Company
					</h3>
					<div className="footer-links">
						<span>
							<a href="">About</a>
						</span>
						<span>
							<a href="">Privacy Policy</a>
						</span>
						<span>
							<a href="">Contact Us</a>
						</span>
					</div>
				</div>
				<div className="col-md-4 col-sm-4 col-xs-12">
					<h3>
						&nbsp;
					</h3>
					<div className="footer-links">
						<span>
							Site design / logo &copy; 2018 SquareReply. Develop By
							<a href="" target="_blank">Cloud </a>
						</span>
					</div>
				</div>
			</div>
		</div>
	</footer>
        </React.Fragment>
       )
   }

}
export default withRouter(BottomFooter)