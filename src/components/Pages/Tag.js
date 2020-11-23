import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import Card from "../Layouts/Card";
import SideBar from "../Layouts/SideBar";
import Pagination from "../Layouts/Pagination";
class Tag extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="container mt-4">
                    <div class="row">
                        <div class="col-md-9 col-sm-8 col-xs-12">
                        {/* <!-- post start  --> */}
                <div class="post_wrap">
                    <h3 class="tag-h3">TAGS</h3>
                    <div class="post_article pull-left">
                        

                        <ul>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Jquery</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Php</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Laravel</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Bootstrap</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Flatter</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Java</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Mysql</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Jquery</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Jquery</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Php</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Laravel</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Bootstrap</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Flatter</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Java</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Mysql</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Jquery</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Jquery</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Php</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Laravel</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Bootstrap</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Flatter</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Java</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Mysql</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Jquery</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Jquery</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Php</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Laravel</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Bootstrap</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Flatter</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Java</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Mysql</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Jquery</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Jquery</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Php</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Laravel</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Bootstrap</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Flatter</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Java</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Mysql</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Jquery</span></a>  <a href="#"><span class="label label-default custom_bg tag_bg">Jquery</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Php</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Laravel</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Bootstrap</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Flatter</span></a>
                            <a href="#"> <span class="label label-default custom_bg tag_bg">Java</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Mysql</span></a>
                            <a href="#"><span class="label label-default custom_bg tag_bg">Jquery</span></a>

                        </ul>
                    </div>

                </div>
                {/* <!-- post end  --> */}
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <SideBar/>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 custom_align_pagination">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination custom_pagination_color">
                                    <Pagination />
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}
export default Tag