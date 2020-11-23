import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
class SideBar extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <div class="col-md-3 col-sm-4 col-xs-12"> */}
                <div class="sidebar">
                    <h3><Link to="/tags"><i class="fa fa-tags" aria-hidden="true" style={{ fontSize: "12px" }}></i> Tags</Link></h3>
                    <ul>
                        <span class="label label-default custom_bg">Jquery</span>
                        <span class="label label-default custom_bg">Php</span>
                        <span class="label label-default custom_bg">Laravel</span>
                        <span class="label label-default custom_bg">Bootstrap</span>
                        <span class="label label-default custom_bg">Flatter</span>
                        <span class="label label-default custom_bg">Java</span>
                        <span class="label label-default custom_bg">Mysql</span>
                    </ul>

                </div>
                <div class="sidebar">
                    <h3>Recent Posts</h3>
                    <ul>
                        <li>
                            <h4><a href="#">There are many variations of passages of Lorem Ipsum</a></h4>
                        </li>
                        <li>
                            <h4><a href="#">There are many variations of passages of Lorem Ipsum</a></h4>
                        </li>
                        <li>
                            <h4><a href="#">There are many variations of passages of Lorem Ipsum</a></h4>
                        </li>

                    </ul>

                </div>
                {/* </div> */}

            </React.Fragment >
        )
    }

}
export default SideBar