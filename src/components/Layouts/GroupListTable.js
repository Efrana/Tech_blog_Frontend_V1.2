import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
class GroupListTable extends Component {
    render() {
        return (
            <React.Fragment>
          {/* <!-- post start  --> */}
            <div class="askqst_post_wrap2">
                <h4 class="header3"> <i class="fa fa-group" style={{ fontSize: "16px" }}></i> Groups</h4>
                <div class="text_control">
                    <Link to="/add_group">
                        <button type="button" class="btn btn-secondary addgroup btn-sm">
                            <i class="fa fa-plus icondesign" aria-hidden="true"></i>
                            Add new group</button></Link>
                </div>

                {/* <!-- <div class="post_article pull-left">    --> */}
                <table id="list_customers">
                    <tr>
                        <th>#Group ID</th>
                        <th>Group Name</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>#1</td>
                        <td>Admin</td>
                        <td>
                            <div class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i
                                        class="fa fa-gear gearicon"></i></a>
                                <ul class="dropdown-menu menudesign2">
                                    <li>
                                        <a href="groupDetails.html" class="mainMenu2">
                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                            <span class="logout">Details</span></a></li>
                                    
                                    <br />
                                    <li>
                                        <a href="#" class="mainMenu2">
                                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                            <span class="logout">Edit</span></a></li>
                                  
                                        <br />

                                    <li>
                                        <a href="#" class="mainMenu2">
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                            <span class="logout">Delete</span></a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>#2</td>
                        <td>Moderator</td>
                        <td>
                            <div class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i
                                        class="fa fa-gear gearicon"></i></a>
                                <ul class="dropdown-menu menudesign2">
                                    <li>
                                        <a href="groupDetails.html" class="mainMenu2">
                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                            <span class="logout">Details</span></a></li>
                                    
                                    <br />
                                    <li>
                                        <a href="#" class="mainMenu2">
                                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                            <span class="logout">Edit</span></a></li>
                                   
                                        <br />

                                    <li>
                                        <a href="#" class="mainMenu2">
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                            <span class="logout">Delete</span></a>
                                    </li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>#3</td>
                        <td>User</td>

                        <td>
                            <div class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i
                                        class="fa fa-gear gearicon"></i></a>
                                <ul class="dropdown-menu menudesign2">
                                    <li>
                                        <a href="groupDetails.html" class="mainMenu2">
                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                            <span class="logout">Details</span></a></li>
                                 
                                    <br />
                                    <li>
                                        <a href="#" class="mainMenu2">
                                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                            <span class="logout">Edit</span></a></li>
                                   
                                        <br />

                                    <li>
                                        <a href="#" class="mainMenu2">
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                            <span class="logout">Delete</span></a>
                                    </li>
                            
                                </ul>
                            </div>
                        </td>
                    </tr>
                    
                </table>
                {/* <!-- </div> --> */}
            </div>
            {/* <!-- post end  --> */}

            </React.Fragment >
        )
    }

}
export default GroupListTable