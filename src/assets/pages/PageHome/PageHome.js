import React, { useEffect } from "react";

import "./PageHome.scss"

const PageHome = () => {
    useEffect(() => {
        document.body.classList.add("overflowy-hidden");
        window.scrollTo(0, 0);
        return () => {
            document.body.classList.remove("overflowy-hidden");
        };
    }, []);

    return <>
        <div className="home">
            <div className="square square-1"></div>
            <div className="square square-2">
                <div className="home-title">The <br />  Orphan <br />of Zhao </div>
                <hr className="home-separator" />
                <div className="home-subtitle">A yellow history</div></div>
            <div className="square square-3"></div>
            <div className="square square-4"></div>
        </div>
    </>
}

export default PageHome;