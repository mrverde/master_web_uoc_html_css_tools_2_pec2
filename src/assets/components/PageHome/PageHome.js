import React from "react";

import poster from '../../images/actor-g1c051a08e_1920.jpg'
import "./PageHome.scss"


const PageHome = () => {
    return <>
        {/* <img className="home--background" src={poster} /> */}
        <div className="home">
            {/* <h1>The Orphan of Zhao</h1> */}
            <div className="square square-1">1</div>
            <div className="square square-2">
                <div className="home--title">El huérfano <br /> de los <br /> Zhao </div>
                <hr className="home--separator" />
                <div className="home--subtitle"> Historia de un amarillo</div></div>
            <div className="square square-3">3</div>
            <div className="square square-4">4</div>
        </div>
    </>
}

export default PageHome;