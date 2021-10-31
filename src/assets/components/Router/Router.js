import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import PageBlog from "../PageBlog"
import PageCharacters from "../PageCharacters"
import PageForm from "../PageForm"
import PageHome from "../PageHome"


const router = props => {

    return (
        <Router>
            {props.children}
            <Switch>
                <Route path="/characters">
                    <PageCharacters />
                </Route>
                <Route path="/blog">
                    <PageBlog />
                </Route>
                <Route path="/form">
                    <PageForm />
                </Route>
                <Route path="/">
                    <PageHome />
                </Route>
            </Switch>
        </Router>
    );
}

export default router;
