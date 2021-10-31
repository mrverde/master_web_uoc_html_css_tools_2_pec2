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
import ContainerPage from "../ContainerPage";


const router = props => {

    return (
        <Router>
            {props.children}
            <Switch>
                <Route path="/characters">
                    <ContainerPage>
                        <PageCharacters />
                    </ContainerPage>
                </Route>
                <Route path="/blog">
                    <ContainerPage>
                        <PageBlog />
                    </ContainerPage>
                </Route>
                <Route path="/form">
                    <ContainerPage>
                        <PageForm />
                    </ContainerPage>
                </Route>
                <Route path="/">
                    <ContainerPage>
                        <PageHome />
                    </ContainerPage>
                </Route>
            </Switch>
        </Router>
    );
}

export default router;
