import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
class AddGroupsBody extends Component {
    render() {
        return (
            <React.Fragment>
                       {/* <!-- post start  --> */}
            <div class="askqst_post_wrap">
            <h4 class="header3">Add Group</h4>
                <br />
                <br />
                <div class="text_control">
                    <div class="Add_group">
                        <form>
                            <p className="font">Group Name:</p>
                            <div class="add_permisision">
                                <input type="email" id="textInput" class="form-control groupform" placeholder="Enter group name.."/>
                            </div>
                            <br />
                            <p className="font">Add Permissions:</p>
                            <br />
                            <div class="add_permisision">
                                <input type="checkbox"/>
                                <span className="permissions">Read all page</span><br/>
                                <input type="checkbox"/>
                                <span className="permissions">edit all page</span><br/>
                                <input type="checkbox"/>
                                <span className="permissions">Can access user Info</span><br/>
                                <input type="checkbox"/>
                                <span className="permissions">Can Approve Post</span><br/>
                                <input type="checkbox"/>
                                <span className="permissions">Can Ban User</span><br/>
                                <input type="checkbox"/>
                                <span className="permissions">Can delete User</span><br/>
                                <input type="checkbox"/>
                                <span className="permissions">Read all page</span><br/>
                                <input type="checkbox"/>
                                <span className="permissions">edit all page</span><br/>
                                <input type="checkbox"/>
                                <span className="permissions">Can access user Info</span><br/>
                                <input type="checkbox"/>
                                <span className="permissions"> Can Approve Post</span><br/>
                                <input type="checkbox"/>
                                <span className="permissions"> Can Ban User</span><br/>
                                <input type="checkbox"/>
                                <span className="permissions"> Can delete User</span><br/>
                            </div>
                           
                            <div class="buttonDiv">
                                <button type="button " class="btn btn-success addButton">Save and add another</button>
                                <button type="button" class="btn btn-success addButton">Save</button>
                            </div>
                        </form>
                    </div>
                </div>

           
            </div>
            {/* <!-- post end  --> */}

            </React.Fragment >
        )
    }

}
export default AddGroupsBody