import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import PageBlog from "../../pages/PageBlog"
import PageCharacters from "../../pages/PageCharacters"
import PageForm from "../../pages/PageForm"
import PageHome from "../../pages/PageHome"
import ContainerPage from "../../components/ContainerPage";


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
