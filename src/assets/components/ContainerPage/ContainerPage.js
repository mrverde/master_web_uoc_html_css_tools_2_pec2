import React from "react";

import "./ContainerPage.scss"

const ContainerPage = props => {
    return <main className="page-container">
        {props.children}
    </main>
}

export default ContainerPage;