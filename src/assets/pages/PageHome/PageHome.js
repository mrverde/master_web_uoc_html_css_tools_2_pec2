import React, { useEffect } from "react";

import poster from '../../images/actor-g1c051a08e_1920.jpg'
import "./PageHome.scss"


const PageHome = () => {
    useEffect(() => {
        document.body.classList.add("overflowy-hidden");
        return () => {
            document.body.classList.remove("overflowy-hidden");
        };
    }, []);

    return <>
        {/* <img className="home-background" src={poster} /> */}
        <div className="home">
            {/* <h1>The Orphan of Zhao</h1> */}
            <div className="square square-1">1</div>
            <div className="square square-2">
                <div className="home-title">The <br />  Orphan <br />of Zhao </div>
                <hr className="home-separator" />
                <div className="home-subtitle">A yellow history</div></div>
            <div className="square square-3">3</div>
            <div className="square square-4">4</div>
        </div>
    </>
}

export default PageHome;