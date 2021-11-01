import React from "react";

const ContainerPage = props => {
    return <main className="page-container">
        {props.children}
    </main>
}

export default ContainerPage;