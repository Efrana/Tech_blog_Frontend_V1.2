import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
class Pagination extends Component {
    render() {
        return (
            <React.Fragment>
                  {/* <!-- post start  --> */}
                <div className="askqst_post_wrap2">
                    <h4 className="header2"><i class="fa fa-exclamation-triangle" aria-hidden="true" style={{ fontSize: "15px" }}></i> Pending Question's</h4>
                    <table id="list_customers">
                        <tr>
                            <th>Username</th>
                            <th>Question</th>
                            <th>Created At</th>
                            <th></th>

                        </tr>
                        <tr>
                            <td><span className="tdname">Efrana</span></td>
                            <td className="thbody">There are many variations
                            </td>
                            <td className="thbody">5th October 2020</td>

                            <td>
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                            className="fa fa-gear gearicon"></i></a>
                                    <ul className="dropdown-menu menudesign2">
                                        <li>
                                            <a href="admin_questionDetails.html" className="mainMenu2">
                                                <i className="fa fa-eye" aria-hidden="true"></i>
                                                <span className="logout"> Details</span></a></li>
                                        
                                        <br />
                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                <span className="logout"> Edit</span></a></li>
                                       
                                            <br />

                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                                <span className="logout"> Delete</span></a>
                                        </li>
                                        <br />

                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                                <span className="logout"> Approve</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>

                            <td><span className="tdname">Jannat</span></td>
                            <td className="thbody">There are many variations
                            </td>
                            <td className="thbody">5th October 2020</td>
                            <td>
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                            className="fa fa-gear gearicon"></i></a>
                                    <ul className="dropdown-menu menudesign2">
                                        <li>
                                            <a href="admin_questionDetails.html" className="mainMenu2">
                                                <i className="fa fa-eye" aria-hidden="true"></i>
                                                <span className="logout"> Details</span></a></li>
                                        
                                        <br />
                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                <span className="logout"> Edit</span></a></li>
                                        
                                            <br />

                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                                <span className="logout"> Delete</span></a>
                                        </li>
                                        <br />

                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                                <span className="logout"> Approve</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><span className="tdname">Farhana</span></td>
                            <td className="thbody">There are many variations
                            </td>
                            <td className="thbody">5th October 2020</td>
                            <td>
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                            className="fa fa-gear gearicon"></i></a>
                                    <ul className="dropdown-menu menudesign2">
                                        <li>
                                            <a href="admin_questionDetails.html" className="mainMenu2">
                                                <i className="fa fa-eye" aria-hidden="true"></i>
                                                <span className="logout"> Details</span></a></li>
                                        
                                        <br />
                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                <span className="logout"> Edit</span></a></li>
                                       
                                            <br />

                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                                <span className="logout"> Delete</span></a>
                                        </li>
                                        <br />

                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                                <span className="logout"> Approve</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><span className="tdname">Afrin</span></td>
                            <td className="thbody">There are many variations
                            </td>
                            <td className="thbody">5th October 2020</td>
                            <td>
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                            className="fa fa-gear gearicon"></i></a>
                                    <ul className="dropdown-menu menudesign2">
                                        <li>
                                            <a href="admin_questionDetails.html" className="mainMenu2">
                                                <i className="fa fa-eye" aria-hidden="true"></i>
                                                <span className="logout"> Details</span></a></li>
                                      
                                        <br />
                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                <span className="logout"> Edit</span></a></li>
                                        
                                            <br />

                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                                <span className="logout"> Delete</span></a>
                                        </li>
                                        <br />

                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                                <span className="logout"> Approve</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><span className="tdname">Maysha</span></td>
                            <td className="thbody">There are many variations
                            </td>
                            <td className="thbody">5th October 2020</td>
                            <td>
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                            className="fa fa-gear gearicon"></i></a>
                                    <ul className="dropdown-menu menudesign2">
                                        <li>
                                            <a href="admin_questionDetails.html" className="mainMenu2">
                                                <i className="fa fa-eye" aria-hidden="true"></i>
                                                <span className="logout"> Details</span></a></li>
                                       
                                        <br />
                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                <span className="logout"> Edit</span></a></li>
                                        
                                            <br />

                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                                <span className="logout"> Delete</span></a>
                                        </li>
                                        <br />

                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                                <span className="logout"> Approve</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><span className="tdname">Farhana Maysha</span></td>
                            <td className="thbody">There are many variations
                            </td>
                            <td className="thbody">5th October 2020</td>
                            <td>
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                            className="fa fa-gear gearicon"></i></a>
                                    <ul className="dropdown-menu menudesign2">
                                        <li>
                                            <a href="admin_questionDetails.html" className="mainMenu2">
                                                <i className="fa fa-eye" aria-hidden="true"></i>
                                                <span className="logout"> Details</span></a></li>
                                      
                                        <br />
                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                <span className="logout"> Edit</span></a></li>
                                        
                                            <br />

                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                                <span className="logout"> Delete</span></a>
                                        </li>
                                        <br />

                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                                <span className="logout"> Approve</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                           
                        </tr>
                        <tr>
                            <td><span className="tdname">Farhana Maysha</span></td>
                            <td className="thbody">There are many variations
                            </td>
                            <td className="thbody">5th October 2020</td>
                            <td>
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                            className="fa fa-gear gearicon"></i></a>
                                    <ul className="dropdown-menu menudesign2">
                                        <li>
                                            <a href="admin_questionDetails.html" className="mainMenu2">
                                                <i className="fa fa-eye" aria-hidden="true"></i>
                                                <span className="logout">Details</span></a></li>
                                      
                                        <br />
                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                <span className="logout">Edit</span></a></li>
                                      
                                            <br />

                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                                <span className="logout">Delete</span></a>
                                        </li>
                                        <br />

                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                                <span className="logout">Approve</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                          
                        </tr>
                        <tr>
                            <td><span className="tdname">Farhana Maysha</span></td>
                            <td className="thbody">There are many variations
                            </td>
                            <td className="thbody">5th October 2020</td>
                            <td>
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                            className="fa fa-gear gearicon"></i></a>
                                    <ul className="dropdown-menu menudesign2">
                                        <li>
                                            <a href="admin_questionDetails.html" className="mainMenu2">
                                                <i className="fa fa-eye" aria-hidden="true"></i>
                                                <span className="logout">Details</span></a></li>
                                        <br />
                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                <span className="logout">Edit</span></a></li>
                                            <br />

                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                                <span className="logout">Delete</span></a>
                                        </li>
                                        <br />

                                        <li>
                                            <a href="#" className="mainMenu2">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                                <span className="logout">Approve</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                          
                        </tr>
                    </table>
                </div>
                {/* // <!-- post end  --> */}
       
            </React.Fragment>
        )
    }

}
export default Pagination