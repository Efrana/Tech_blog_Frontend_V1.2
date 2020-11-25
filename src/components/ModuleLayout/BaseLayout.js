import React from 'react';
import { BrowserRouter, Switch, Route,withRouter } from 'react-router-dom';
import AuthenticatedComponent from '../Auth/AuthenticatedComponent'
import NavBar from "../Layouts/NavBar";
import BottomFooter from "../Layouts/BottomFooter";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import Tag from "../Pages/Tag";
import AskQuestion from "../Pages/AskQuestion";
import PendingQuestion from "../Pages/PendinQuestion";
import UserList from "../Pages/UserList";
import GroupList from "../Pages/GroupList";
import AddGroups from '../Pages/AddGroups';
import { routes } from './Routes';
//  const swichRoutes = (
//      <Switch>
//          {
//              routes.map((prop,key) => {
//                 return (
//                     <Route
//                     path = {prop.path}
//                     component = {prop.component}
//                     key = {key}
//                     />
//                 ) 
//              }
//              )
//          }
//          </Switch>
//  )
function BaseLayout() {
    return (
            // <BrowserRouter>
            <>
            <NavBar />
            <div>
            <swichRoutes/>
            </div>
                <Switch>  
                     <Route path="/" exact component={Home} />
                    <Route path="/details/:ID" exact component={Details} />
                    <Route path="/tags" component={Tag} />
                    <AuthenticatedComponent>
                    <Route path="/ask_question" exact component={AskQuestion} />
                    <Route path="/edit_question" component={AskQuestion} />
                    </AuthenticatedComponent>
                    <Route path="/pending_question" component={PendingQuestion} />
                    <Route path="/user_list" component={UserList} />
                    <Route path="/group_list" component={GroupList}/>
                    <Route path="/add_group" component={AddGroups} /> 
                </Switch>
                <BottomFooter />
                </>
            //  </BrowserRouter>       
    );
}

export default withRouter(BaseLayout);