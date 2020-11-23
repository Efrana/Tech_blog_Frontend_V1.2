import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import Card from "../Layouts/Card";
import SideBar from "../Layouts/SideBar";
import AskQuestionBody from "../Layouts/AskQuestionBody";

class AskQuestion extends Component {
    render() {
        return (
            <React.Fragment>
              <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-9 col-sm-8 col-xs-12">
                            <AskQuestionBody />
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-12">
                            <SideBar/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}
export default AskQuestion