import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import RouterSwitch from "./RouterSwitch"

const router = props => {
    const { pages } = props;

    const generateNavElements = () => {
        return Object.keys(pages).map((key, idx) => {
            const currentKey = pages[key];

            return <li key={`nav-${idx}-${key}`} className="nav-item">
                <Link className={idx === 0 ? "nav-link active" : "nav-link"} to={currentKey["href"]}>{currentKey["label"]}</Link>
            </li>

        }
        )
    };

    return (
        <Router>
            <div>
                <ul className="nav">
                    {generateNavElements()}
                </ul>
                <RouterSwitch />
            </div>
        </Router>
    );
}

export default router;
