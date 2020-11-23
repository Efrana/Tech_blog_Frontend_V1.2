import React, { Component } from 'react';
import GroupListTable from "../Layouts/GroupListTable";
import AdminSidebar from "../Layouts/AdminSidebar";
import Pagination from "../Layouts/Pagination";
class GroupList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-9 col-sm-8 col-xs-12">
                            <GroupListTable />
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-12">
                            <AdminSidebar/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 custom_align_pagination">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination custom_pagination_color">
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
export default GroupList