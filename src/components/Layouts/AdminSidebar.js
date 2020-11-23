import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
class AdminSidebar extends Component {
    render() {
        return (
            <React.Fragment>
            
                <div className="sidebar">
                
                <h3> <i class="fa fa-file" aria-hidden="true" style={{ fontSize: "12px" }}></i> Pages</h3>
                    <Link to="/pending_question" className="sidebarp"><i class="fa fa-exclamation-triangle" aria-hidden="true" style={{ fontSize: "11px" }}></i>  Pending Question's</Link>
                    <br />
                    <br />
                    <Link to="/user_list" className="sidebarp"><i class="fa fa-address-book" aria-hidden="true" style={{ fontSize: "11px" }}></i> User List</Link>
                    <br />
                    <br />
                    <Link to="/group_list" className="sidebarp"><i class="fa fa-group" style={{ fontSize: "11px" }}></i> Group List</Link>
                    <br />
                    <br />
                    <Link to="/tags" className="sidebarp"><i class="fa fa-tags" aria-hidden="true" style={{ fontSize: "11px" }}></i> Tags</Link>

                </div>
              
                {/* </div> */}

            </React.Fragment >
        )
    }

}
export default AdminSidebar