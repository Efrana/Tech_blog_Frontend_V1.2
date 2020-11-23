import React, { Component } from 'react';
import axios from "axios";
import Card from "../Layouts/Card";
import SideBar from "../Layouts/SideBar";
import Pagination from "../Layouts/Pagination";
import { Link, useLocation, withRouter } from "react-router-dom";
import Config from "../BaseUrl/Config";
const queryString = require('query-string');


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            currentPage: 1,
            totalPage: 1,
            myParam: '',
            myFilter: '',
            FilterDone: false
        };
    }

    componentDidMount() {
        this.pagination(this.state.currentPage);

    }

    componentDidUpdate() {

        let Qstring = queryString.parse(window.location.search)
        if (Object.values(Qstring).length > 0) {

            if (this.state.FilterDone === true) {
                this.pagination(this.state.currentPage)
                this.setState({
                    FilterDone: false
                })
            }
        }
        else {
            if (this.state.FilterDone === false) {
                this.pagination(this.state.currentPage)
                this.setState({
                    FilterDone: true
                })
            }
        }
    }

    // useQuery() {
    //     return new URLSearchParams(useLocation().search);
    // }

    pagination = (pageNo) => {

        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get("title") ? urlParams.get("title") : "";
        const myFilter = urlParams.get("filter") ? urlParams.get("filter") : "";

        axios
            .get(`${Config.apiUrl}/api/questions?page=${pageNo}&tag=${myFilter}&title=${myParam}`)
            .then((response) => {
                this.setState({
                    questions: response.data.questions,
                    currentPage: response.data.pagination.current_page,
                    totalPage: response.data.pagination.totalPage,
                });

            })
            .catch((error) => console.log(error));

    }
    render() {
        let { questions, currentPage, totalPage } = this.state;
        let pages = [];
        for (var i = 1; i <= this.state.totalPage; i++) {
            pages.push(i);
        }
        return (
            <React.Fragment>
                <div class="container mt-4">
                    <div class="row">
                        <div class="col-md-9 col-sm-8 col-xs-12">
                            {/* card start */}
                            {this.state.questions.map((question, index) => (
                                <Card question={question} key={index}
                                />
                            ))}

                            {/* card end */}
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <SideBar />
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 custom_align_pagination">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination custom_pagination_color">
                                    <Pagination currentPage={currentPage}
                                        totalPage={totalPage}
                                        loadData={(value) => {
                                            // console.log(value)
                                            this.pagination(value)
                                        }} />
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}
export default Home