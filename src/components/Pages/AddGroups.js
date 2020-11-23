import React, { Component } from 'react';
import UserListTable from "../Layouts/UserListTable";
import AdminSidebar from "../Layouts/AdminSidebar";
import AddGroupsBody from "../Layouts/AddGroupsBody";
class AddGroups extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-9 col-sm-8 col-xs-12">
                            <AddGroupsBody />
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-12">
                            <AdminSidebar/>
                        </div>
                    </div>
                </div>
            
            </React.Fragment>
        )
    }

}
export default AddGroups