import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        let pages = [];
        for (var i = 1; i <= this.props.totalPage; i++) {
            pages.push(i);

        }
        return (
            <React.Fragment>
                <li className="page-item">
                    <a className="page-link" href="#">
                        Previous</a>
                </li>

                {/* { this.props.currentPage > 1 &&
                    <li className="page-item">
                        <a className="page-link" href="#"
                            onClick={() => {
                                this.props.loadData(this.props.currentPage - 1)
                            }}> Previous</a>
                    </li>
                } */}

                {/* {pages.map((page, index) => (
                    <li key={index}>
                        { this.props.totalPage > 1 &&
                            <li className={page === this.props.currentPage ? "page-item active" : "page-item"}>
                                <a className="page-link"
                                    onClick={() => {
                                        this.props.loadData(page)
                                    }}>{page}
                                </a>
                            </li>
                        }
                    </li>
                ))} */}
                <li className="page-item "><a className="page-link " href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>

            </React.Fragment>
        )
    }

}
export default Pagination