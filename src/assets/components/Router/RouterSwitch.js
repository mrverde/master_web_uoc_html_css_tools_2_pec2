import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

import PageBlog from "../PageBlog"
import PageCharacters from "../PageCharacters"
import PageForm from "../PageForm"
import PageHome from "../PageHome"

export default () => {
    return <>
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
    </>
}