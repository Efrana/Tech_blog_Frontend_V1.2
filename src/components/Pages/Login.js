import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom';
class Login extends Component {
	constructor(props) {
        super(props);
        this.state = {
            isModalClose: false
        };
	}
	closeModal = () => this.setState({ isModalClose: false })
   render(){
       return(
        <React.Fragment>
      	<div class="modal" tabindex="-1" role="dialog" id="mymodal" show={this.props.isModalOpen} onHide={this.state.isModalClose}>
		<div class="modal-dialog modal_width" role="document">
			<div class="modal-content"  style={{borderRadius: "0px"}}>
				{/* <a href="#"><i class="fa fa-window-close window_close_icon"  class="close" data-dismiss="modal" aria-hidden="true"></i></a> */}
				<i class="fa fa-window-close window_close_icon" onClick={this.closeModal}></i>
				<div class="modal-header boder-bottom-color">
				{/* <i class="fa fa-window-close"></i> */}
					<p class="modal_p">Login To Our Site</p>
					<p class="modal_sugg">Enter your username and password to log on :</p>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					</button>
				</div>
				<div class="modal-body modal-body-design2">
					<form>
						<div class="form-group">
							<input type="email" class="form-control fontcontrol" id="text"
								aria-describedby="emailHelp" placeholder="Email.."/>
						</div>
						<div class="form-group">
							<input type="password" class="form-control fontcontrol" id="text"
								placeholder="Password.."/>
						</div>
						<p class="modal_p2">forget password?</p>
						<button type="submit" class="btn btn-primary btn_secoend"  style={{borderRadius: "2px"}}>Sign in!</button>
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