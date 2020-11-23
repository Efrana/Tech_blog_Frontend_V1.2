import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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

function BaseLayout() {
    return (
        <div className="BaseLayout">
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/details/:id" component={Details} />
                    <Route path="/tags" component={Tag} />
                    <Route path="/ask_question" component={AskQuestion} />
                    <Route path="/edit_question" component={AskQuestion} />
                    <Route exact path="/pending_question" component={PendingQuestion} />
                    <Route exact path="/user_list" component={UserList} />
                    <Route exact path="/group_list" component={GroupList} />
                    <Route exact path="/add_group" component={AddGroups} />
                </Switch>
                <BottomFooter />
            </BrowserRouter>
        </div>
    );
}

export default BaseLayout;