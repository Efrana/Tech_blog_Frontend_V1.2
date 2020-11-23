import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
class UserListTable extends Component {
    render() {
        return (
            <React.Fragment>
                       {/* <!-- post start  --> */}
            <div class="askqst_post_wrap">
                <h4 class="header2"><i class="fa fa-address-book" aria-hidden="true" style={{ fontSize: "15px" }}></i> User List</h4>
                {/* <!-- <div class="post_article pull-left">    --> */}
                <table id="list_customers" >
                    <tr >
                        <th>#User ID</th>
                        <th>Username</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th></th>  
                    </tr>
                    <tr>
                        <td>#1</td>
                        <td>Jannat</td>
                        <td>efrana@gmail.com</td>
                        <td>0147343484</td>
                        <td>User</td>
                        <td><button type="button" class="btn btn-warning btn-sm banButton">Ban</button></td>
                    </tr>
                    <tr>
                        <td>#2</td>
                        <td>Efrana</td>
                        <td>efrana@gmail.com</td>
                        <td>0147343484</td>
                        <td>Admin</td>
                        <td><button type="button" class="btn btn-warning btn-sm banButton">Ban</button></td>
                    </tr>
                    <tr>
                        <td>#3</td>
                        <td>Efrana Jannat</td>
                        <td>efrana@gmail.com</td>
                        <td>0147343484</td>
                        <td>Moderator</td>
                        <td><button type="button" class="btn btn-warning btn-sm banButton">Ban</button></td>
                    </tr>
                    <tr>
                        <td>#4</td>
                        <td>Efrana Jannat</td>
                        <td>efrana@gmail.com</td>
                        <td>0147343484</td>
                        <td>Moderator</td>
                        <td><button type="button" class="btn btn-warning btn-sm banButton">Ban</button></td>
                    </tr>
                    <tr>
                        <td>#5</td>
                        <td>Farhana</td>
                        <td>efrana@gmail.com</td>
                        <td>0147343484</td>
                        <td>Moderator</td>
                        <td><button type="button" class="btn btn-warning btn-sm banButton ">Ban</button></td>
                    </tr>
                    <tr>
                        <td>#6</td>
                        <td>Maysha</td>
                        <td>efrana@gmail.com</td>
                        <td>0147343484</td>
                        <td>User</td>
                        <td><button type="button" class="btn btn-danger btn-sm banButton">Banned</button></td>
                    </tr>
                    <tr>
                        <td>#7</td>
                        <td>Efrana Jannat</td>
                        <td>efrana@gmail.com</td>
                        <td>0147343484</td>
                        <td>User</td>
                        <td><button type="button" class="btn btn-danger btn-sm banButton">Banned</button></td>
                    </tr>
                    <tr>
                        <td>#8</td>
                        <td>Efrana Jannat</td>
                        <td>efrana@gmail.com</td>
                        <td>0147343484</td>
                        <td>User</td>
                        <td><button type="button" class="btn btn-warning btn-sm banButton">Ban</button></td>
                    </tr>
                    <tr>
                        <td>#6</td>
                        <td>Maysha</td>
                        <td>efrana@gmail.com</td>
                        <td>0147343484</td>
                        <td>User</td>
                        <td><button type="button" class="btn btn-warning btn-sm banButton">Ban</button></td>
                    </tr>
                    <tr>
                        <td>#7</td>
                        <td>Maysha</td>
                        <td>efrana@gmail.com</td>
                        <td>0147343484</td>
                        <td>User</td>
                        <td><button type="button" class="btn btn-warning btn-sm banButton">Ban</button></td>
                    </tr>
                </table>
           
            </div>
            {/* <!-- post end  --> */}

            </React.Fragment >
        )
    }

}
export default UserListTable