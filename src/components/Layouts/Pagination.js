import React, { Component } from "react";
import { Link } from "react-router-dom";
class Pagination extends Component {

  render() {
    let pages = [];
    for (var i = 1; i <= this.props.totalPage; i++) {
      pages.push(i);

    }
    return (
      <ul className="pagination  justify-content-center">
        { this.props.currentPage > 1 &&
          <li className="page-item">
            <a className="page-link" href="#"
              onClick={() => {
                this.props.loadData(this.props.currentPage - 1)
              }}> Previous</a>
          </li>
        }
        

        {pages.map((page, index) => (
          // <li key={index}>
            // { this.props.totalPage > 1 &&
              <li className = {page===this.props.currentPage ? "page-item active " : "page-item"}>
                <a className="page-link" style={{ color: "black" }}
                  onClick={() => {
                    this.props.loadData(page)
                  }}>{page}
                </a>
               </li>
            // }
          // </li>
        ))}


        { this.props.currentPage < this.props.totalPage &&
          <li className="page-item">
          <a className="page-link" 
              onClick={() => {
                this.props.loadData(this.props.currentPage + 1)
              }}> Next</a>
          </li>
        }
      </ul>
    );
  }
}
export default Pagination;