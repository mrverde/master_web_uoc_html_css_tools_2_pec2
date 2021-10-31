import React from "react";

const ContainerPage = props => {
    return <div className="page-container">
        {props.children}
    </div>
}

export default ContainerPage;